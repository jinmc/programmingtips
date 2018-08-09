---
layout: post
comments: true
title:  "Floating point decimals and Double Precision Decimals"
date:   2018-04-30
categories: csBasics
---

So there are 8 primitive data types in JAVA.. boolean, byte, char, short, int long, float, double.
Boolean is just two values(1 bit), byte is 8 bits integer, char is 16 bit (for unicode), short - 16bits,
int 32bits, long 64 bits, float -32bits, double 64 bits.

So basically there are 6 integer types (kind of.. ) and two of decimal like types.. 
I learned the decimal like structure at school(CIT 593...) but I couldn't recall it so I decided to look up today 
to see how it works.

Basically 64 bit version(double) is basically the same structure of 32bit (float) so we could just
focus on the 32 bit version. In the 32 bit version there are three parts, the sign signature for 1 bit,
the 8 bits of Exponent, and significand precision for the rest, namely, 23 bits. For 64 bits, 1 bit of sign bit, 
11 bits of Exponent, and 53 bits of Significand precision, which is also called mantissa. There are all 
based on IEEE 754 floating point structure.

So basically how it works is to make the decimal notation to binary notation. Let's do an easy example.
12.25. First, make the integer version to a binary number. 12 ->  1100 (2). Also, .25 would be.. 
0.01 (2). You can google how to make decimal notation to binary notation. After making integer and decimals conversion,
we combine to make the full conversion, which would become 1100.01(2). Now we would like to express this 
in the format of floating point, and as it is a positive number, the sign bit would be 0,
and this could be expressed as 1.10001 * 2^(3) so the exponent value should be 3. But as default we have to 
add 127 because of the offset 127. The fraction, mantissa would be the value 10001000.....  till it reaches the end.

As we saw, floating point decimals could sometimes be accurate but sometimes inevitably 
misses the information because you cannot make a perfect 0.1 (10) with binary decimals.
This is why we should not trust decimals in computer science.

{% include disqus2.html %}