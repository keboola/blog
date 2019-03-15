---
layout: post
categories: how-to
permalink: text-clustering
title: Text Clustering
perex: I got into a situation when I was left with a puzzler from which everyone has
  put their hands off. I confess that I did not have much experience with it and went
  for it to learn something new. And I enjoyed it in the end! Clustering text strings!
date: 2019-03-09 23:00:00 +0000
user: jiri-vicherek
coverphoto: ''
coverphoto_slider: ''

---
### **What was it all about?**

One of our potential clients gets information from various places about how their products are being sold. He would like to merge these data together and add his own sales data to it. But it's not that easy - every resource calls one identical product differently, more or less similarly.

Let's have the "LEGO Friends 3061: City Park Cafe" product. This could look like this in the data:

![](https://lh5.googleusercontent.com/Vou2UeI5b4C64XUS5wlPgCpGKkhmWxrPdkWFQD6qPz76BymufYeOoLscqThwPPttFdQlXf6lt0S3QfqgZm6CQpuSZIDjzn9lwmtXtVJlcGR3KQ5C-V7jxYNkCeqpX_Q6b2vNol74i1kvvre0gg =468x546)

_LEGO Friends - formatting, packaging, distribution, region, promotions ..._

  
All of the labels, accessories, distribution channels, etc. can be misspelt, a single supplier may combine data in any way, + you have hundreds of LEGO products and Chinese imitations.

### What was my goal?

"Somehow" simplify the data and pair them to each other to create a "pairing list" that serves as a connecting element of the information from different vendors. Simply said, to be able to identify sales reported as "Lego Friends 3061: City Park Cafe" and "lego friends / 3061 / City-Park Cafe" as one and the same product. There are hundreds of LEGO products in clients’ data, so this is an example of how a linking element for LEGO Friends: City Park Cafe can look like - the input data are merged into blue columns and the aggregation of sales numbers is done according to the green columns:

![](https://lh6.googleusercontent.com/ZQ9rkvaXwPsOwb1GeKARuX5nMIGlFgzd3l5DjQo3_QCE0ADAnQVkBim0Je7OnM9RQgbF-csfsp5AjsmSHV46HFv6TUCFsXViHKY79N6Lm-xP2ZaAqVQyrQ5UCQ9e1Pm1fYa0k2mErU-ppclTRw =646x346)

### **How did I want to do it?**

I thought about seven possibilities.

1. go through it manually and make a list as a trained monkey would do
2. try to let geneea.com train the entity detection in the text and then get the green lines from them
3. Try it somehow with Trifacta.com
4. apply text token (n-gram)
5. apply phonetic algorithms
6. use the Levenshtein distance
7. and finally implement the principle of DNA sequencing - Kolmogorov complexity

Point One (1) looked the best, but it would take a long time, my error rate would change (and thus the quality of the list at the time of production), it would not be possible to correct it from the beginning if I discovered in the middle of my attempt that some products were connected wrongly. And finally: this would be difficult to extend by other data sources.

I did not want to pull in boys from Geneea.com (2) because I did not have the cash to pay them.

Trifacta (3) seems to me more like a (slow) clicking generator of very erroneous rules.

![](https://lh5.googleusercontent.com/y8wnH2VYeagLesViGpsy_tuaYJ3KxqruVSKkUpHN2Xklf-9YL7TrtsNc3MEUa5B9l3AtUNvWubXVL7JGgicck4C4SMS444BnzrMy5sLue8ITtqR_TA7GgM8lzeCwdcP_RQhLmWVbjIfMwa1s-g =614x570)

The remaining points (4, 5, 6 and 7) I decided to try at OpenRefine, the successor to GoogleRefine. For production deployment, you can choose to manage the instance from RefinePro.com, about which I wrote [here](https://padak.keboola.com/refinepro-124825494033#.xv6blgqgo).

###   
**Text Clustering**

If I get a fingerprint from each product name that will be unique to the product, I have the chance that I will always have different texts of the same meaning for a single fingerprint.

**n-gram**

The n-gram algorithm is a so-called tokenization algorithm that first simplifies the text, turns everything into lowercase, removes punctuation, spaces and characters such as dashes, commas, semicolons, and so on.

Breaks the text to "n-grams" - if I do n-gram = 2, the text will be broken down by two characters: Prague = pr, ra, ah, ha

These n-character combinations are sorted and duplicates are thrown out it connects together; from Praha comes out "ahhaprra", Kokotín will come out "inkookotti" (if I do 1-gram, Praha will be "ahpr" and Kokotín "iknot")

This is great for real-life typing. Not so much in nonsense, abbreviations, etc., because "abc" and "bca" have the same 2-gram (ab, bc) and it's different. But [Wikipedia says](https://en.wikipedia.org/wiki/N-gram#n-grams_for_approximate_matching) it has been empirically found that if two real texts have the same "vector" (n-gram field: {"ab", "bc"}), then it is very likely the same text. I definitely wanted to try this!

  
**Phonetic algorithm**

OpenRefine has an implemented [Metaphone3](https://en.wikipedia.org/wiki/Metaphone) algorithm - it makes a fingerprint based on how it sounds in English. Has a ton of rules:

![](https://lh5.googleusercontent.com/SkXlGqD8yHyOx7jeD72NhXBU9YtCsK_8tlBsdG_xqq65gu9qpoN-6peCdpoeZsv40lEXIOVokmFSfbkChYQe2tUc2Qsam0va83ph7iZw2yAB9uBJjpJ1AipFQrpWBJl97ef8eKYs =605x151)

and for my use-case the results were pretty accurate!

**Levenshtein's distance**

Sometimes it is called "edit distance" - it's super easy: for every two strings of text it assigns a number that is equal to the number of change operations you have to make to get the second from the first text.

_Example:_

_Coffee | Beer = 4_

_Coarse | Course = 1_

_Lego Friends 3061: City Park Cafe | Lego-Friends 3061: City Park Cafe = 1_

The more distance you tolerate, the greater the chance of replacing two different texts. Small distance "guarantees" the correction of typing, misspelling, etc.

**Kolmogorov complexity**

It is implemented as PPM in OpenRefine. When I found out, that it was used to search for the similarities in the DNA-derived strings I could not go to sleep until I tried it!

The idea of ​​this algorithm is based on idea thought that text compression "somehow" (mathematically) works with the information value of compressed text. If I join A + B one after another and compress it, the resulting size (A + B) will de facto be the same as the compression itself (A).

Example:

I took the previous paragraph as document A and document B, saved it once in document "docA.txt" and then I saved it twice (A + B) into document "docAB.txt". I have compressed doc with (239b) and docAB (249) with a gzip - the difference is 10 characters, while the input (A + B) document is 271 characters longer. The difference in compression of two identical documents compared to compression of one (identical) document thus makes 3.6%. If A was the first paragraph of the description of this algorithm and the second paragraph was B, the difference in compression A and compression A + B would be 53.1%.

Therefore, the PPM algorithm in OpenRefine takes two different texts and applies compression in different combinations, from which it always gets the size. It deducts the coefficient of difference from it according to this pattern:

  
![](https://lh6.googleusercontent.com/msLBRt2hXoU0puORE8fpG7ywY5ExRhej3zUhBVfPeUw8JA1vVVcbd4pU_GsMVOhuhj-r509f1UWn8HwLj8kMaezadl4kEW7M9wDwy2CLxfUEBGkPYi4Ybhc0YBxIx7miT1oP5orp =317x43)

In my example of identical A and B the pattern would look like this:

![](https://lh6.googleusercontent.com/GwlXkdPN0WBicZyTcHTyZ6mfIDLECbJ68jUR1aHZhffcNYJiRWMYVXIDtodsRfhFtVQ9HPPfj7AQjGIGQ7LOlrIoitF88XvempwE3ABMiFa19SzAc5rpYI5gW6p4mx6NmCgA1v3o =195x38)

Finally, if A is the first paragraph of this description and B is the second paragraph, the pattern will be as follows:

![](https://lh6.googleusercontent.com/f-tLtJtef-ml2LbNNSqot56Kw-qmJ7YEDtIf_D8eaAuDN1OzJhukEaXIIRCGk2loqy7OBiksI7gm_9ROLHskj6eOatvLhF0lYRKdEISZgbBOzOvZG6VeLaB2td30qkw_woIAO3Yc =282x39)

It is good to note that this approach has better results in detecting similarities if the text is longer. You can take notes from the Scout Chronicle and sort them by close similarity to find that they have similar stories, although this is of course always a completely different text!

### **Lets jump into practice!**

I will not try to describe installation and work with OpenRefine - I'll leave it for the [official screencasts](https://github.com/OpenRefine/OpenRefine/wiki/Screencasts).

As soon as my data has been uploaded, I started by duplicating the product column. The goal is to change a copy of the values so that at the end I will get a pair "original text" <> "text":

![](https://lh3.googleusercontent.com/ENQZegbykeyblfvxBYp2Iq7iAAGMN2mae_4KG0huZ82Q4Q9Qn9A7IK3fY9r-RhcSi5OsEBlIOpeXf2ZiB4O67MWTnsf7n12oJrOSFfW5eFa1mB2Oa7wz8UDajI9lE_XJ7ptIs4NBt14wi6UcVg =547x559)

Then I chose "Face Faceting" on the new column and pressed the "Cluster" button in the left box:

![](https://lh6.googleusercontent.com/rlAAxQ_JDq9qtTtJTbNVcL2_GkVS8mW55gKV69r-JcpUm5xlXIXAyfmJTLyLis11kVnOmIOjSCHdnQSiDOHyAaoFsW8zrf7jwl1vQOSyAusB1EJ6U4WqUfqUaRCR8PgWXjV6GpkBTQrtcxMeVg =639x330)

A dialog box appears, where you can select the method (tokenization / similarity) and the function (n-gram / metaphone / ...) and it is possible to change the parameters. OpenRefine applies the calculation for you and displays suggestions of which rows from our column belong together. It is good to understand algorithms and play with them. You do not have to be a mathematician who will implement it in C ++, but it is good to know that for Levenshtein's distance you should not give Radius=20 because it will replace "Pork Feast" for "Pheasant Race".

![](https://lh4.googleusercontent.com/6YWcHGW9gSic18kMtFLip5FS9jZdUpj2Nlq4IO5rjLU-pkWQeMpVfGBrXkP-V4ibd2oAq-mAjKuY3haroK5bEwzfPaPSDvdgbE9kJaLLTG9ZvJNRdEJpXO4GFpDVAnrNrSR5CWsx5twMR_KIYg =659x416)

If the estimated Cluster is OK to you, check "Merge?" and name the values for that cluster. Whenever you go to "Merge Selected & Re-Cluster", what you set up is applied and everything is calculated again. I first made clusters using sensitive tokenization algorithms (n-gram = 1) and then went to PPM / Metaphone / Levenshtein (radius>1) ... When there is nothing left to cluster (or it just does not progress further), close the window and the result, in my simple LEGO example, is just like a fairy tale:

![](https://lh3.googleusercontent.com/iaBibfw9cNtIB2RL9cyRg-2y9DFusPsBeu4jVNZIhe_XaXHaRcR9DjRNvWvO0ObHALs0vobTZBtU2tLZJPyHv35xKL5sbdbWHHyKjF3Pbsl1npIv94TdzG749a0viGcbKKceVlmJAr_T-XwPfw =553x476)

Imagine that there are thousands of rows in the left column of dozens of products - then in the right column we have the target of having dozens of clusters. The use is obvious: the sales data from many sources will be joined here (the key is the source column + the original product column), and the values ​​from the OpenRefine column link everything that belongs to one product, regardless of how messy it is defined in the data source.

**Findings of my struggle**

The quality of my data is really bad. It is good to try and clean them a little bit for better clustering. I used UPPER () in SQL to convert all the characters into uppercase letters, remove the explicit nonsense (region information, type of packaging, etc.) and deduplicated the rows - from tens of thousands of items I had about 1,500 at one time. In my situation, I occasionally needed to delete the text as "ABC", but only at the end of the line (i.e. leave "ABC Special", but "ABC Special ABC" at the end to throw away). This is a great fit for regular expressions. Do not be scared by it! In the Snowflake.net DB there is a REGEXP_REPLACE that would remove "DHL" and "PPL" from the end of the line as follows:

![](https://lh4.googleusercontent.com/TgAkAK2StrB3AfudwsX4P6PFxv4e8nlm_4iYn_YZXM_2Q_-UBvCAcEgMmaZ7D3DeBKDP4ppgxD2oUSJ788TrKf_NGimJnva__cOeJjkkiYbgYXkNLIqUDECZ7YenYrjs0uc4R0LH =605x85)

The "$" character says it matches only if it's at the end of the line (so I usually have the still TRIMOUT the column so I do not have a gap at the end and do not have the regexp pattern 'DHL $ | PPL $')

![](https://lh3.googleusercontent.com/RwBGKLgCuWt3ptCiqX9qw7IVmz5oL50NBGKnv_4pezhDm81BzaKzkqFe97DCUtWPXNR4WThmXw76UTsk_Hhb59AJ9oCjDbw8-pq13GB2DDvXmTNsXF9K2Ja9gCSv26K3rf_DAzYX =605x81)

and the pipe ("|") separates the field of values ​​I am looking for (so I do not have to call REPLACE as many times as I want to change.) If it matches, it will replace it with nothing (''). I have quite a number of such rules, it simplifies my work in OpenRefine - less data, more accuracy. If you put “^” in front of a string instead of “$”, it means that it only searches at the beginning of the line. The most of the rules that you may need are easy to find on Google. Pay attention to regular expressions, it's a very strong thing!

  
**Well, the best comes at the end**

In OpenRefine, each action generates a rule. You can view these by switching at the upper left of the logo under the "Undo / Redo" menu:

![](https://lh3.googleusercontent.com/zrcGGOEfwmxUXbgJH6XgQ95OvXYptwkHC35K41E-VDUdIjvlM_4f8axpSIfJ42TmGzctekNZFNrwCazIU-1d6krrJ40_c2m_n2el-hzByLuSeGQhHSt1xAqCKLFcP7uCI9ejBiFrVWLSe2163g =398x497)

The whole definition of Clustering is interactive - you do not want the machine to decide for you in this case - but once you define it, you can easily repeat it. To do this, just export commands / rules (definitions in json):

![](https://lh4.googleusercontent.com/iY2lQf_HzYouvyViTpUiLaN_w9jFLfLZU8HtsOfCJ0-Qi-UTMUydKPQeaW61xyZRuIaMIRZauqsyi1t03pIfnuM4tC-W3eBO9PuRoONcbv2TaEhe4WcV_UqszBe8ZcUu071gM5dPv_LB5Z6Slw =658x496)

If you copy it (my cfg from this blog post is [here](https://gist.github.com/padak/519af9867074672b0a265bef7d5a4818)), you can take the original data as it looks when it's loaded into OpenRefine and apply these rules directly to it - it's not necessary to click it all again. This leads to full automation (the [final question of the FAQ](https://github.com/OpenRefine/OpenRefine/wiki/FAQ#can-openrefine-be-used-as-a-piece-of-a-larger-etl-pipeline)), which is a bit of a hack. **Does anyone have experience with it?**

I hope that it will kick you a little bit into experimenting with OpenRefine, which is an extra powerful tool and it pays to learn to use it - at least the basics. You can find videos such as calling an external API to enrich your cell values etc., on the Internet,

Josef Šlerka, before he came to the R Shiny apps, I thought loved it - there would surely be a super source of inspiration from him! At least the link to a [CheatSheet](https://datenschule.de/files/downloads/workshops/CheatSheet-Open-Refine.pdf).

**Update 1**

Josef added a [comment to my FB post](https://www.facebook.com/Petr.Keboola/posts/568246583385097?comment_id=568395320036890&comment_tracking=%7B%22tn%22%3A%22R0%22%7D) with a link to his presentation, where this topic goes deeper into detail #super!

![](https://lh4.googleusercontent.com/pEgJzRptQcHcCYQMwLOzQLcQC_fi2XXPp9-NmWYAfFG3u_ToBv5VQmtiMSq0THJ6rE57tB9tXFZJp_4fDlxXgW7hZfAKf1_tTv7ymtzNK_LiV2_hCGdWq6FrTcgJYJMU7nZ5EQKBAWWaq-7lmA =604x454)

**Update 2**

I did quite a lot of careful work with my preparation before joining OpenRefine. It did not stand out, but the cleanup is crucial. Here's an example of how I tear the text according to a rule that resolves logic in the text.

I have these ten sample lines:

![](https://lh4.googleusercontent.com/7YC1iqfnsXNK_7WUgxDypDu2c1HpBn7yJzwpzmNGGooJZ4LApSsoF18igyFNDjZ3fgg8pccsSrwyUksb2ochp64H1JCFor1xZwgaGS9LxycqcY30Cv35rjyeB6wphtLPXgG3uNqRM2Oc4empZA =449x339)And I'd like to take everything to the left by product code. But it is not given where exactly the product code is. In my case I have defined it as a number containing more than 3 digits.

Using this:

![](https://lh6.googleusercontent.com/a8X18e_E2gDg9dK1smaLgo7q6JZZ--amkxsxLgdGIFaqHoQMM9nRZYahUQ1qhV898FJwmruHeDap5ihY_SCAURYt_1dP-WFdJ0snkmke_kHOdxatxkecytdyenXS7DQLrnwdTeov =605x171)

_line 3-6 is a function which has two parameters: column and regexp patern – it returns matched pattern’s position_

I'll get:

![](https://lh3.googleusercontent.com/r7PN9qs3935zqyeUmFoHZKOuj56TLZbyzo2hz5hn7BRzWYSJ3BAAF04oSPBMgaI5LEzevlGhKR1XJ_zDRQ8Uq-PgxKu2zNpqFgIUetHzmk6UOIXlimjK1HwJxRkIGJ3Dp3lvrJQVloGi9zA0jQ =501x354)

If I want to find a date, which is what [Ondřej Tučný](https://medium.com/@ondrej.tucny) asks [here](https://www.facebook.com/Petr.Keboola/posts/568246583385097?comment_id=568382600038162&comment_tracking=%7B%22tn%22%3A%22R%22%7D), I will only make another definition of a regular expression ([source for reading](https://www.regular-expressions.info/dates.html)).

![](https://lh4.googleusercontent.com/KKRkQn8WmvXtXy2GceyYTXMDTVohds5ZdGCrtlSNpcmdJ9tlEzhsn1VU9g9e8DzlqqFC25sRxsSRNVZHKa0m38KDEtfTvrWNL2TzfrkcdEJ9E1sOknSJHUGSKd26htbYx8QN9u6M =605x303)

_fce in lines 7-13 takes the column (row 8) as one parameter and the second parameter position (l.9-12). Since the position starts at the point where the matched pattern is, I deduct one from the position (I.12) so that I do not have the first character of my number in the LEFT () product_

If I take everything to the left from this position, using LEFT (), I get this:

![](https://lh5.googleusercontent.com/WGKXD0iwCoMRPU6_vJ8rIVCkKaQ5uUJCoCVLXvWkPNd0RRJf3wXc7o10y35w5W97Kgbsa6sgIHsmNAjDP4Hq8GcYcSnSmLgPTonJBFd7LiZHgnBoGuB4gbEsS2zY1FfdoRa-WjQknCUYzEBAdQ =671x326)

_On the first line one can calculate that "(" is at position 14, but REGEXP_INSTR returns 15 - therefore the "-1" on line 12 in SQL._

On the fifth line, I can see that I caught only a piece of the number with a dot in the middle. I'm not a regexp master, so I finally solved it in SQL, but of course I'm going to write a [Regex matching number and decimals rule](https://stackoverflow.com/questions/10921058/regex-matching-numbers-and-decimals). And I have placed inside of the function “replace” which deletes my dot:

![](https://lh4.googleusercontent.com/EOYSLKMWZDXMZQHspGRVAeVJ6WrvvYR14uHMthAB9L0Ns0nWiVcr3W0qUmuWQS4UyFYvDJNAoihtDG_glHzz5WLM2SyWHr38MGebXMTWII60_b3uXvGQFZDk-IV-MDCA2e3UzGuf =605x304)

![](https://lh3.googleusercontent.com/Di3oPEVt6Ec2f0ZAH5cJMPlnakIqdmLxU7mNKsYCutYJLTd_2YRaNDentwSEznYeghPh8htgaIbRnIxSNpOF13M9VXEw6ECD0PiULjAzknkXhFwZxEEWO8TGBKcR0wKS7ddL9SmQdv4fxXVQrg =565x289)

And finally, I dropped all the characters I did not want have, did it with the UPPER case letters and removed any leading / trailing spaces using TRIM ():

![](https://lh3.googleusercontent.com/b8NC35AvFDgQrfyoxPFzw595U7hsHb_Er7UlPiykAbvPQujcHsz6gTSipPS3R2P5hTrqHdupXM3T3y4dsP4zL9s9owKev6yFJYeM-rBS0b9QBbJBn5S0ukAe7zT_NAvm99w-PpPV =605x417)

_line 11-20 is what's visible so far (because I'm not doing it anymore, so I dropped a list of matched positions); on line 4-8 I will replace all characters that are not from the alphabet or spaces (_[_http://stackoverflow.com/a/6053606_](http://stackoverflow.com/a/6053606 "http://stackoverflow.com/a/6053606")_) or the word "edition" with a space - I will delete the mess; on row 3, I will make the result with upper case letters and cut the spaces between them with TRIM_

This kind of code will return exactly what I want:

![](https://lh3.googleusercontent.com/x0NfZnlg_qSdHuH1btjjahEapLSOHlFv2a4nkWP6ORjOT0EA-uonyLfkPYkh1BRP59OLavv4mivd1n4YkQLtKnwcsax71yTpmiXqRcDFrRLVEPsHjcPyHbTL8nAfavDziCtLsQVBB3atFuA_Dw =628x316)

You can see that I can play with it, iteratively tune the regexp patterns to follow the logic of the text and only when I have nice product names in my own column, I will send it to OpenRefine.

If there was not a "log" of sales, but perhaps a review from Amazon where people would write about how much not fun it is to build a LEGO 3061, I would go the path of my own entity Detection Model GeneA.com - which I'm going to do for another client - so I'll see how it turns out :)