var module=(function(){
			var countX=1,
				countY=1,
				deg=90,
				ele=document.getElementById('groups1'),
				rotateX=0,
				rotateY=0;
			var transRotateX=function(){
				var degNum=_randomNum()*deg,
					rota=parseInt(rotateX)+parseInt(degNum);

				ele.style.transform='rotateX('+rota+'deg)';
				rotateX=_validate(ele.style.transform);
				countX++;
				// console.log('X:'+rotateX);
			},
				transRotateY=function(){
				var degNum=_randomNum()*deg,
					rota=parseInt(rotateY)+parseInt(degNum);

				ele.style.transform='rotateY('+rota+'deg)';
				rotateY=_validate(ele.style.transform);
				countY++;
				// console.log('Y:'+rotateY);
			},
				random=function(){
				var bol;
				if(Math.round(Math.random() ) ) {
					bol=true;
				}else{
					bol=false;
				}
				return bol;
			},
				_randomNum=function(){
					var num=1;
					if(Math.round(Math.random() ) ) {
						num=1;
					}else{
						num=-1;
					}
					return num;
				},
				_validate=function(val){
					var com=val;
					com=com.replace(/[a-zA-Z]/g,'');
					com=com.replace(/\(/g,'');
					com=com.replace(/\)/g,'');
					return com;

			},
				setColor=function(){
					var colorR,
						colorG,
						colorB,
						opacity,
						eleChild=ele.childNodes;
						for(var p in eleChild ){
								if(eleChild[p].nodeName=='P')
								{	
									colorR=parseInt(Math.random()*255),
									colorG=parseInt(Math.random()*255),
									colorB=parseInt(Math.random()*255),
									opacity=1,
									// opacity=Math.random(),
									eleChild[p].style.backgroundColor='rgba('+colorR+','+colorG+','+colorB+','+opacity+')';
								}
									
						 	}
				}
			return {
				transRotateX:transRotateX,
				transRotateY:transRotateY,
				random:random,
				_randomNum:_randomNum,
				setColor:setColor

			}
		})();
		var test=module;
			test.setColor();
			setInterval(function(){
				if(test.random()){
					test.transRotateY()
				}else{
					test.transRotateX()
				}
			},1000);
		var Testnode='P';
		if(Testnode=='p'||'P')
			console.log('yes');
		else
			console.log('no');