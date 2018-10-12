---
title: Snowflake vs. Redshift backend speed comparison
layout: post
categories: nerds
date: 2018-10-11 00:00:00 +0000
perex: At the same time as the announcement about default backend in KBC being shifted
  to Snowflake, I have started working on a new project. The customer pushed us the
  initial dump of two main tables (10M rows each) and some other small attribute tables.
user: pavel-dolezal
coverphoto: ''
coverphoto_slider: ''

---
## Snowflake vs. Redshift backend speed comparison

by [Martin Fiser](http://blog.keboola.com/author/22817)

### Intro  

At the same time as the [announcement](http://blog.keboola.com/new-dose-of-steroids-in-the-keboola-backend) about default backend in KBC being shifted to Snowflake, I have started working on a new project. The customer pushed us the initial dump of two main tables (10M rows each) and some other small attribute tables.  

![](https://lh3.googleusercontent.com/Trfa2ls7CJC0euI1-y06J4QsvXoX9iMM_XjCXMGTx95wUbOTtcSL-TwI_pdyrBGS3_lKOX_7OO_fasVWYj1vTuIb3VNR0txT0TXAd3ECMm3DdYFATNtNMP6vBviPdcYHc1fLVxvJ =519x755)

The main transformation handles initial join of one of the big table and a handful of small ones...

![](https://lh5.googleusercontent.com/0uI378FFGAkPOUIf_Bv_bFUwNemDwnINkD43HCu-NkYLVt0Bx29TuaEcCoaMRR_ur2xqYwqeO2_Oh7qZ7ZtXjmHML6w3xDE-2LY_PfHTM7unIHmYClzU6bgTsiAaZfgd_8acHaB_ =624x315)

... and then it is meshed with the other big table, on which we have to calculate duration... 

![](https://lh5.googleusercontent.com/-XWS2DmXfduggtM6WWzoF8VtwV_qHaLvb2lSxXiOIpbk08xVzyaSrtH2eRawqWe8hRrKgf-Z5CT0bi06kd0KuM_jA_0x-ccc7YadHWMBy7018nbvf613JpejsqUwFZg-0VQamKQj =624x29)

... and apply multiple cases

![](https://lh4.googleusercontent.com/FVP3rC740LufQ46e-4GsfeuGKH8ItmMDQtmsORB_tdvg1EzSx9zw5Q4FCENyMK6_6DI9Rl3Ljj7q18XnF3aLuykOBhaI9m05mgrxpyQIrEBDN11HVzD3rFdVPKYC1xZtCikO47dj =624x343)

Originally, I had the complete transformations done in MySQL since I've used that transformation for data exploration on a small sample of data. However, when trying on the whole set, I had to kill the transformation after 36 minutes of running and not delivering a single output table...

### Speed comparison  

Since MySQL was not an option, I have tested and compared both Redshift and new Snowflake transformations. It took almost 20 minutes for Redshift to cope with this transformation. In contrast, it took only 5 minutes for Snowflake!

Furthermore, I have explored (thanks Marcus) the difference between _CREATE TABLE_  and _CREATE VIEW_ :  There is a subtle difference between those, it will actually shave off some time to use _CREATE VIEW_ (the difference is between 7-10%). 

### Overview  

![](https://lh6.googleusercontent.com/x_V7KbBOmRYV7uXvo4qSBCDcC_MqOFml1KEmR4BJ406wBP_cR-2mCjHwhgVDG6dvbHkbWX3BnB7qxOBr3_OSq4soQvJzUqmOh3j6Ic_CKtH7_FG_zPgeYHcMrGwHMcuH-nLREpCe =340x204)

### Screenshots  

**Redshift**

**![](https://lh6.googleusercontent.com/vby-RSUUsyi7gQTB8hE7XnfWu9yWsMFLcyVWS9ETzHqx4Oz17uyCCrsfWCB8F2ItlGfrKlfAhy2eGyzlsyh0w765HkxPkGKAjazUfJfaMTb6xfHX7WmZkq-vTOZvK1dU4lVTfz0_ =624x247)**

**Snowflake**

**![](https://lh6.googleusercontent.com/6Op0rIOuFgwLQm3PIfE2vMmD9pdLpkNzpPymbVcEshpgRUOGbKP0hXI1ySXW4TvTb7wsN1lxEMy45N3ZgVNqB-wl2ZfbuCb0oAOM7nEddHFeqbM0YFpVPHWoCzZ5dNlrxqRqb0q5 =624x309)**

### Notes  

The purpose of this exercise was to evaluate the speed from the KBC user perspective. In other words, I have compared the whole transformation completion time -  both table data load and the query time. This represents the full user experience on the respective storage and transformation back-ends.