﻿function randomString(c){var d="abcdefghijklmnopqrstuvwxyz";var a="";for(var b=c;b>0;--b){a+=d[Math.floor(Math.random()*d.length)]}return a}var id=randomString(5);var roll=randomString(6);document.write("<style>#"+id+"{height:58px;overflow:hidden;width:322px;border:dashed 0.5px #07c160;margin: 4 auto 4 auto;}."+roll+" li{font-size:12px;text-indent:-30px;padding: 2 0 2 0;line-height:1;}.icon{width:24px;margin-right:2;vertical-align:middle}</style>");document.write("<div id="+id+'><ul class="'+roll+'" style="margin-block:0px;padding-inline-start:33px;"><li><img class="icon" src="https://p1.music.126.net/DzktnyKTy3LKdTKXW55kww==/109951168120082179.png"><a href="https://flowus.cn/share/9d13333d-121b-4ce2-ac82-e5267de5a3bd">免费领取！向日葵远控７天VIP精英版兑换码【长期优惠活动】</a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/654570_DIJtzL7fQx-GQFM_1669981454/0"><a href="https://docs.qq.com/doc/DZFNwQmJ4SVhNcVRn">莆田珂珂鞋厂，自家工厂，全网最低价格，最高品质！</a></li><li><img class="icon" src="https://p1.music.126.net/OPyEiHMrcbhM4mlX7eg2mA==/109951168117974767.jpg"><a href="https://m.tb.cn/h.UiWAB9k">【即将涨价】2盒连花清蕴仅需￥58，29一盒！</a></li><li><img class="icon" src="https://p1.music.126.net/OPyEiHMrcbhM4mlX7eg2mA==/109951168117974767.jpg"><a href="https://p.pinduoduo.com/AAZAd4eG">【建议囤一点】一盒连花清蕴券后价￥28.98！</a></li><li><img class="icon" src="https://p1.music.126.net/xdWqah0JXvPwDGXwWiv2rQ==/109951168114272525.png"><a href="https://pic.rmb.bdstatic.com/bjh/eb5d19dc207d8870e620e6f6a13d9c7f68.jpeg">同程旅行活动：QQ音乐会员仅需6元／月！【开始每天限量了】</a></li><li><img class="icon" src="https://p1.music.126.net/uzFqzAAo5zWVIPobOsZOZQ==/109951168120312415.png"><a href="https://flowus.cn/share/1c2067a2-82eb-460b-afd5-77b7bf591b3b">尚德考研丨价值699元在职研考研资料，限额0元领取</a></li></ul></div>');$(function(){var c=$("#"+id);var b;c.hover(function(){clearInterval(b)},function(){b=setInterval(function(){a(c)},2000)}).trigger("mouseleave");function a(e){var f=e.find("ul");var d=f.find("li:first").height();f.animate({marginTop:-d+"px"},500,function(){f.css({marginTop:0}).find("li:first").appendTo(f)})}});