var tl = TimelineMax();
TweenMax.set(".bar-1", {width: "0px", transformOrigin: "100% 50%"});
tl.add('enter');

tl.fromTo(".bar-1", 2.5, {attr: {width: "0px"}},{attr: {width: "500px"}, ease:Elastic.easeOut.config(1, 0.5)}, 'enter');
return tl;