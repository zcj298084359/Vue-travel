<template>
	<div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/01.jpg" alt=""/>
            	<div class="text-box">
                	<h2>前往澳门</h2>
                    <p>攻略最当季</p>
                </div>
            </li>
            <li><img src="../assets/images/02.jpg" alt=""/>
            	<div class="text-box">
                	<h2>前往新疆</h2>
                    <p>攻略最当季</p>
                </div>
            </li>
            <li><img src="../assets/images/03.jpg" alt=""/>
            	<div class="text-box">
                	<h2>前往冲绳</h2>
                    <p>攻略最当季</p>
               </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
	export default {
		mounted(){
			this.fnSlider();
		},		
		methods:{
			fnSlider(){
				$(function (){
					var mySwipe=new Swipe($('.banner')[0],{
						auto:2000,
						continuous:true,
						stopPropation:true,
						callback:function (index,element){
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			}
		}
	}
</script>