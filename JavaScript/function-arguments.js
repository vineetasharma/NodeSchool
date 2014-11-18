function math(first,second,third)
{
if(typeof first=== 'number'&& typeof second==='number'&& typeof third==='number')
{
return first+second*third;
}
else
return 'arguments are not valid';
}
console.log(math(53,61,67));
