---
layout: post
categories: how-to
permalink: text-clustering
title: Text Clustering
perex: Some time ago, I was left with a puzzler that nobody wanted to touch. Even
  though I did not have much experience with the issue, I went for it to learn something
  new. And I enjoyed it at the end! Clustering text strings!
date: 2019-03-09T23:00:00.000+00:00
user: jiri-vicherek
coverphoto: ''
coverphoto_slider: ''

---
### **What was it all about?**

**What was it all about?**

One of our potential clients gets information from various places about how their products are selling. They would like to merge this data together and add their own sales data to it. But it's not that easy – every source calls the same product a little differently.

Let's take a closer look at the product "LEGO Friends 3061: City Park Cafe". This could look like this in the data:

![](/uploads/image5.png)

_LEGO Friends - formatting, packaging, distribution, region, promotions ..._

All labels, notes, distribution channels, etc. can be misspelled, and suppliers can combine the info in many ways. In addition, there are hundreds of LEGO products as well as their Chinese imitations available on the market.

### What was my goal?

I wanted to simplify the data and create a "pairing list" as a connecting block of the information obtained from different vendors. In other words, I wanted to be able to identify sales reported as "Lego Friends 3061: City Park Cafe" and "lego friends / 3061 / City-Park Cafe" as the same product. There are hundreds of LEGO products in the client’s data, and this is only an example of how a linking block for "LEGO Friends: City Park Cafe" can look like. The input data is matched against the blue columns, the green columns are the “standard” names to do the aggregation of sales numbers:

![](/uploads/image15.png)

### **How did I want to do it?**

I considered seven different approaches:

1. Go through it manually and make a list as a trained monkey would do.
2. Try to let geneea.com train entity detection and get the green lines from them.
3. Try it with trifacta.com.
4. Apply a text token (n-gram).
5. Apply phonetic algorithms.
6. Use the Levenshtein distance. And finally,
7. Implement the principle of DNA sequencing – Kolmogorov complexity.

I liked the first option the best, but it would take a long time, and my error rate would change (i.e. the quality of the list at the time of production). Also, it would not be possible to correct it from the beginning if I discovered in the middle of my attempt that some products were connected wrongly. And finally, this would be difficult to extend with other data sources.

I did not want to involve the guys from Geneea (option 2) because I did not have the cash to pay them. Trifacta (option 3) seemed to me more like a (slow) clicking generator of very erroneous rules.

![](/uploads/image18.png)

I decided to try the remaining points (4–7) using OpenRefine, the successor to GoogleRefine. For production deployment, you can choose to manage the instance from RefinePro.com – I wrote about it [here](https://padak.keboola.com/refinepro-124825494033#.xv6blgqgo).

### **Text Clustering**

If I get a fingerprint from each product name that is unique to the product, I will always have a chance to have different texts of the same meaning for a single fingerprint.

**n-gram**

The n-gram algorithm is the so-called tokenization algorithm that first simplifies the text, turns everything into lowercase, removes punctuation, spaces, and characters such as dashes, commas, semicolons, etc.

It breaks the text to "n-grams". If I do n-gram = 2, the text will be broken down by two characters: Praha = pr, ra, ah, ha.

These n-character combinations are sorted, and duplicates are thrown out. The resulting sequence of n-grams is joined together; we get "ahhaprra" from Praha, Kokotín gives us "inkookotti" (if I do 1-gram, Praha will be "ahpr" and Kokotín "iknot").

This is great for misspellings in real-life typing. Not so much for nonsense, abbreviations, etc. because "abc" and "bca" have the same 2-gram (ab, bc), but it's different. However, [Wikipedia says](https://en.wikipedia.org/wiki/N-gram#n-grams_for_approximate_matching) it has been empirically found that if two real texts have the same "vector" (n-gram array: {"ab", "bc"}), then it is very likely the same text. I definitely wanted to try this!

**Phonetic algorithm**

OpenRefine contains an implementation of the [Metaphone3](https://en.wikipedia.org/wiki/Metaphone) algorithm. It makes a fingerprint based on how it sounds in English and has a ton of rules:

![](/uploads/Screenshot 2019-02-28 13.57.17.png)

For my use case, the results were pretty accurate!

**Levenshtein's distance**

Sometimes it is called "edit distance", and it's super easy: for every two strings of text it gives you a number that is equal to the number of change operations you have to turn one text into the other.

_Example:_

_Coffee | Beer = 4  
Coarse | Course = 1  
Lego Friends 3061: City Park Cafe | Lego-Friends 3061: City Park Cafe = 1_

The larger distance you tolerate, the greater the chance of considering equal two texts that are actually different. A small distance "guarantees" the correction of typos, misspellings, etc.

**Kolmogorov complexity**

It is called PPM in OpenRefine. When I found out it was used to search for similarities in the DNA-derived strings I could not go to sleep until I tried it!

This algorithm is based on the idea that text compression "somehow" (mathematically) works with the information value of the compressed text. If I join A + B one after another and compress it, the resulting size (A + B) will de facto be the same as the compression itself (A).

Example:

I took the previous paragraph as both document A and document B, saved it once in document "docA.txt" and then saved it twice (A + B) into document "docAB.txt". I compressed both documents with gzip, docA was compressed to 239b and docAB to 249b. The difference was 10 characters even though docAB.txt is 271 characters longer. The difference in compression of two identical documents compared to compression of one (identical) document thus makes 3.6%. However, if A were the first paragraph of the description of this algorithm and the second paragraph were B, the difference in compression of A and compression of A + B would be 53.1%.

Therefore, the PPM algorithm in OpenRefine takes two different texts and applies compression in various combinations, from which it always gets the size. The different coefficient is calculated according to the following formula:

![](/uploads/pasted image 0.png)

In my example of identical A and B, the formula would look like this:

![](/uploads/pasted image 0-1.png)

Finally, if A is the first paragraph of this description and B is the second paragraph, the pattern will be as follows:

![](/uploads/pasted image 0-2.png)

It is good to note that this approach has better results in detecting similarities if the text is longer. You can take notes from the Scout Chronicle and sort them by close similarity to find that they have similar stories, although this is, of course, always a completely different text!

### **Let’s get to work!**

I will not try to describe how to install and work with OpenRefine – I'll leave it for the [official screencasts](https://github.com/OpenRefine/OpenRefine/wiki/Screencasts).

As soon as my data was uploaded, I started by duplicating the product column. The goal is to change the copy of the values so that I will get a pair "original text" <> "clustered text" at the end:

![](https://lh5.googleusercontent.com/VkU2BkWSJF3JiN2QAaz5j_gLDhWS8jyzvQKZ02FS1DWnIWuxaL87XCg0eOOnh4TA_ukR8YEQz1FmOxtzEk3IAVpbRHMPTW4Iy1Bjsy5yxPdDoO-fIkl9YJdeey7V7CjxieXujQGSLZOO-hDTzQ =547x559)Then I chose "Face Faceting" on the new column and pressed the "Cluster" button in the left box:

![](https://lh3.googleusercontent.com/5oSTx5YoUegRnHEUBnqJ6jAwA730wDmGdmlKiDSOL69e-rYo1Lea9I6gDcGoLNroCUmOXgFp5z_Wow8id4SbWd9c1F2qO-whk8VGDaISOk02mWEu-B7AQEzKjcPfs2cQo2RtrqayDWBkQFItYA =639x330)

A dialog box appears where you can select the method (tokenization / similarity) and the function (n-gram / metaphone / ...). It is possible to change the parameters. OpenRefine applies the calculation for you and displays suggestions of which rows from our column belong together. It is good to understand algorithms and play with them. You do not have to be a mathematician who can implement it in C ++, but it is good to know that for Levenshtein's distance, for instance, you should not use Radius=20 because it will replace "Pork Feast" for "Pheasant Race".

![](https://lh4.googleusercontent.com/D8WwoH7k8KFaps6UepZ178aUNuNwf9BKjotSZG_h0VibTMt7JnjCTITOjDkd1tSyfboeEbPVpA0EeJDKOJDI6B8HIhB5vX2kaco_IeI9xrtMZ_yy_kq7_vUIJPKgjuJIduTRYhqSpUbkOJNVhA =659x416)

If the estimated Cluster looks okay to you, check "Merge?" and name the values for that cluster. Whenever you go to "Merge Selected & Re-Cluster", what you set up is applied and everything is calculated again. I first made clusters using sensitive tokenization algorithms (n-gram = 1) and then went to PPM / Metaphone / Levenshtein (radius>1)... When there is nothing left to cluster (or it just does not progress further), close the window. In my simple LEGO example, the result is just like a fairy tale:

![](https://lh4.googleusercontent.com/jfld5rZ3QBXFHl8ee_MKV1KZWdeSOV0RGibQu3vpiIXlSTbbqpZQvrsHW1UiDg7T5dfWzaIGgrbJSczz4l5cQqPkQB6UBT8G_y8xQASlVHgFJXENT17WTuVAR9Pgvf5sICCD9qhJqBIsvx0Fbw =553x476)

Imagine that there are thousands of rows in the left column describing dozens of products – then in the right column, we want to have dozens of clusters. The use is obvious: the sales data from many different sources will be joined here (the key is the source column + the original product column), and the values ​​from the OpenRefine column link everything that belongs to one product, regardless of how messy the descriptions in the data sources are.

**What did I learn?**

The quality of my data is really bad. It is good to try and clean it a little bit for better clustering. I used UPPER () in SQL to convert all the characters into uppercase, removed clear nonsense (region information, type of packaging, etc.), and deduplicated the rows – I managed to get the initial tens of thousands of items down to about 1,500. I needed to delete certain parts of the texts, e.g. "ABC", but only at the end of lines (i.e., I kept "ABC Special", but deleted the last "ABC" part in "ABC Special ABC"). This is a great fit for regular expressions. Do not be frightened by it! In the Snowflake.net DB, there is a REGEXP_REPLACE that would remove "DHL" and "PPL" from the end of the line as follows:

![](https://lh4.googleusercontent.com/wWupEs2AOiIhksLYLy_9ys6L34DZf5aXH4D9lygkMQEAC0n29JQ_lrMj50Bmn5T9dZ-mobPsFNmASN7Qa96k7Wjn0pWPg7xKYtH_F8wP3f_2s6dHVEr5f3WxeoqdP-n6C_zOLQYv =605x85)

The "$" character says it matches only if it's at the end of the line (so I usually TRIM the column to not have a space at the end and not need the regexp pattern to be 'DHL $ | PPL $').

![](https://lh3.googleusercontent.com/9D3LsnAREelX3hVj4KVpckZu_Maix1E1pHRR6mS1nmeTkHr8bIhLhAPHU2Ro6QHe5RL3gOW5wvLSKNnRlgeBhEO54IWW6sEez_mTnjfuRjYseiuliudUCIFEmnK6ucP-VzkyK1RI =605x81)

The pipe ("|") separates the array of values ​​I am looking for (so I do not have to call REPLACE as many times as I want to change.) Matches will be replaced with nothing (''). I have quite a number of such rules. They simplify my work in OpenRefine – less data, better accuracy. If you put “^” in front of a string instead of “$”, it means that it only searches at the beginning of the line. Most of the rules that you may need are easy to find with Google. Pay attention to regular expressions – it's a very powerful thing!

**I saved the best for last:** In OpenRefine, each action generates a rule. To view the rules, use the switch at the upper left corner below the logo in the "Undo / Redo" menu:

![](https://lh5.googleusercontent.com/U4a7UQ78_uyMudCVjqli2qnKyNYqEwv8AIdb3f1Ntp7xMJo0S1ZHRzd98bnskTEHyNyEo_2YJZo7gDpNOOLSNRwO69dYZ4tvvbolMKQKIiPUW5Ib96MjksMrpH_gjiiq2gdYmdoRQ8wAef54Rg =398x497)

  
The whole definition of clustering is interactive – you do not want the machine to decide for you in this case – but once you define it, you can easily repeat it. To do this, just export the commands / rules (definitions in JSON):

![](https://lh6.googleusercontent.com/kvXSLsKsHZrpSpbP6tb89ESKSlLVBMLL3jD_2sP67MyLdvCsWK6QX23No0-kz3kzzD_MbkR10eAmTmD_wtWzmrKFySlHnLwsPLoUVwpPM1jIdt3ivD8ybKiscIfBazRGH9rWwQagq5QY4RSeiw =658x496)

If you copy them (my cfg from this blog post is [here](https://gist.github.com/padak/519af9867074672b0a265bef7d5a4818)), you can take the original data as it looks when it's loaded into OpenRefine and apply these rules directly to it – it's not necessary to click it all again. This leads to full automation (the [final question of the FAQ](https://github.com/OpenRefine/OpenRefine/wiki/FAQ#can-openrefine-be-used-as-a-piece-of-a-larger-etl-pipeline)), which is a bit of a hack. **Does anyone have experience with it?**

I hope that it will encourage you to experiment with OpenRefine. It is a very powerful tool and it pays to learn to use it – at least its basics. You can find videos showing how to call an external API to enrich your cell values, etc. on the Internet.

Check out this [cheat sheet](https://datenschule.de/files/downloads/workshops/CheatSheet-Open-Refine.pdf).

**Update:**

Before joining OpenRefine, I spent a lot of time carefully preparing my data. I have not stressed it enough, but the cleanup is crucial. Here's an example of how I split the text using a rule about text logic.

I have the following ten sample lines:

![](https://lh4.googleusercontent.com/0i_VegapTT3G20teBJwCCh8Ml2LRWkUjkpZ8Xvc1DiguCCVJzh-zIGw2xn-3Y2swV__gXqplC1zwNt9CSHg3Il2aryGsN_sWrnvjibvE0AJQxRsz9nzhYbIOpzE3tt0N1asNc3oMcT3t0Ayglg =449x339)

I'd like to take everything to the left of a product code. But I don’t know where exactly the product code is. So I defined it as a number containing more than 3 digits.

Using this:

![](https://lh4.googleusercontent.com/XjzSGUTSbLDjj1xZ9FZkzxanHUXHBJAkAxIItoIR_RFKR6irE9l8K3uIfhjHEbjSwJ-nqJISz2qIUc8kzYJHWBi1zvvPWQIP55mcCufUbQHRXLq9ojx4MEK_G6D_TCj7K92uR-eC =605x171)

_Lines 3-6 show a function with two parameters: column and regexp pattern – it returns a matched pattern’s position._

I'll get:

![](https://lh5.googleusercontent.com/8qkI_Odz9kOkFXN0b8Y40_hjqMNPiLe66JQ4_M9J_T4Ax529vazFf0Jasol0qbiWOotmWn1IJz53ObgV1QtEwDNcebajoXRfbmlaFhqHR6rwAZ__8dX_WcKDujjU_b-dOAUdm4asHOMi9OwaHA =501x354)

If I wanted to find a date, I would only define another regular expression ([source for reading](https://www.regular-expressions.info/dates.html)).

![](https://lh4.googleusercontent.com/szft-zlFbXDCLVVEibxn7hYS9yaoACtoqLIqe2CwzokEbBENI-J4bta8nkFRxZWq-bTP-fY3f6jvnaMkQkOiijrWkPixKkIwR2JHoxf8zbxQDPYsWt7ik_o0Gj6lBdQh4-xUEViG =605x303)_The function in lines 7-13 takes the column (line 8) as one parameter and the position within the text as the second parameter position (l.9-12). Since the position starts at the point where the matched pattern is, I deduct one from the position (I.12) so that I do not have the first character of my number in the LEFT () product._

If I take everything to the left from this position using LEFT (), I will get this:

![](https://lh5.googleusercontent.com/A3a1OuTB-lPs_CxA0hKXpRoZ5B0kB2nWsxueB-7eXE2f5jA_KWj2dSzSAFWCDU27IyhfcvYqfPm4lhQ8O6XlTwaNdhWFGCtWm8pxc2MM0RAmFzK17VcVBI9TNprslJZx-tsoEHj5tJXlzS6eTg =671x326)_In the first row, one can calculate that "(" is at position 14, but REGEXP_INSTR returns 15 therefore the "-1" on line 12 in SQL._

In the fifth row, I can see that I caught only a piece of the number with a dot in the middle. Being no regexp master, I finally solved it in SQL. But I'm going to write a [Regex matching number and decimals rule](https://stackoverflow.com/questions/10921058/regex-matching-numbers-and-decimals). And I placed “replace” inside of the function to delete my dot:

![](https://lh6.googleusercontent.com/k8QiFJNQnmmIbhO2D3f-m4Cid7_7ma8IHvd1PIn8NrcxhzlRRiqK0oaLJZBsmGtu2zNRknafsbdxsEY2QkMLD3eeBkJxcFFsEwhqJwKU2l3C0U7BsVOYHZTnKMrdT23XebKtSaSc =605x304)

![](https://lh6.googleusercontent.com/78w-hMdIQVCpEyi6KgXi7LOLdO_0u7Cr72y0DD0nR8IgO36IsojaWPd88kYbOoY8OKfABqywIHqZysx1Q5f5b-E1ehovgyWuBRredO6DI0aPsXv3-FfGZVh-DhdxyUSD8tNM5jM2dCfc3u9h1w =565x289)Finally, I dropped all the characters I did not want to have, used uppercase, and removed any leading / trailing spaces using TRIM ():

![](https://lh3.googleusercontent.com/90hrjemgtNpe7vHIUYIBF0CreDDg4555ASRQ3tQiKbXuBZjiNgBJ2NPdy4J_TIsUCkgiEVHXhVv7n1AZSlhFgYfmI6Jr8PrtZV-ixvXnXCmr66d797e7e2VwXSwE4h_Ts1CrTLEJ =605x417)_Lines 11-20 are what's still visible (because I'm not doing it anymore, so I dropped a list of matched positions); on lines 4-8, I replace all non-alphabetical characters, spaces (_[_http://stackoverflow.com/a/6053606_](http://stackoverflow.com/a/6053606 "http://stackoverflow.com/a/6053606")_), and the word "edition" with a space, getting rid of all the mess; on line 3, I use uppercase letters for the results and cut the spaces between them with TRIM_

This code returns exactly what I want:

![](https://lh6.googleusercontent.com/dtGJj_CdQFoW0SJlqhRkWPQZb3hzNwZLh2WY2lUEOn0Qxo1g63NBCG2aRV_UEk3YiP1Nycg1w563J384gVR7iiQhAG9PLhDbbe1rTM0v6DExQ4arDnScUyZyjtndI31fTrEErgZtbg2C24_G_g =628x316)You can see that I can play with it and iteratively tune the regexp patterns to follow the logic of the text. Only when I have nice product names in a separate column, I will send it to OpenRefine.

If the source data were not a "log" of sales, but perhaps Amazon reviews where people complain that building LEGO 3061 is no fun, I would go with my own entity detection model from genea.com. BTW, this is what I'm going to do for another client of ours – I can’t wait to see how it turns out :).