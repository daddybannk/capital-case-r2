String.prototype.toCapitalCase=function(t=!0){function e(t){return-1===t.search(/[^a-zA-Z]+/)}return function(t){let n=0;const o=t.split("");for(let t=0;t<o.length;t++){const r=o[t];0==n&&e(o[t])?(o[t]=r.toUpperCase(),n=1):0!=n||e(o[t])?1==n&&e(o[t])?n=2:1!=n||e(o[t])?2==n&&e(o[t])?n=2:2!=n||e(o[t])?3==n&&e(o[t])?(o[t]=r.toUpperCase(),n=1):3!=n||e(o[t])||(n=3):n=3:n=3:n=3}return o.join("")}(t?this:this.toLowerCase())};