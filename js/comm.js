
var TS = TS === undefined ? {} : TS;
TS = {
	tip:function(content,fn){		
		var contents=content || '输入错误...';
		
		var html=['<div class="tipBox">',
					'<div class="mask"></div>',
					'<div class="tip-content">',
						'<div class="tip-head"><span>提示</span><i class="close-btn"></i></div>',
						'<div class="tip-c">',
							'<div class="tip-txt">'+contents+'</div>',
							'<a href="#" class="tip-btn">获取过闸码</a>',
						'</div>',
					'</div>',
				'</div>'].join('');
		$('body').append(html);
		var a=$('.tipBox'),b=a.find(".close-btn");
		a.css({display:'block'}).animate({'opacity':1});
		b.on('click',function(){
			$(this).parents('.tipBox').remove()
		})
		fn && fn()
	}
}





















