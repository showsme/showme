define("common:widget/ui/admanager/smaad/smaad",function(e){function i(e,i,a){i=i||".sma-container",a=a||".sma-body",this.$el=t(i),this.$body=this.$el.find(a),this.pageModel=e}var t=e("common:widget/ui/base/base"),a=e("common:widget/ui/admanager/smaad/label"),n=e("common:widget/ui/admanager/smaad/labelpic"),d=e("common:widget/ui/admanager/ad/ad"),s=e("common:widget/ui/imghelper/imghelper");return t.extend(i.prototype,d,{init:function(){this.getData()},getData:function(){var e=this.pageModel.get("smaPic"),i=e&&e.fdi_PicResultArray&&t.isArray(e.fdi_PicResultArray)&&e.fdi_PicResultArray.length,a=encodeURIComponent(this.pageModel.get("word")),n=this;t.ajax({url:"http://image.baidu.com/sma?smafr=2&q="+a,dataType:"jsonp",jsonp:"jsonpcallback",success:function(t){t&&t.length>0?(n.data=t,i&&i>1&&n.data.length>1?(n.picListData=e.fdi_PicResultArray,n.renderPic()):n.render()):n.hide()},error:function(){n.hide()}})},render:function(e){this.$body.empty(),e=e||this.data||[];var i=e.slice(0,6),n=0,d=i.length,s=null,o=null;if(3>=d)this.hide();else for(this.show(),n=0;d>n;n++)s=i[n],s=t.extend({subutf8:s.utf8,idx:n,count:d,qid:this.pageModel.get("aspSID")},s),o=new a(s),o.appendTo(this.$body)},renderPic:function(e){var i=this;this.$body.empty(),e=e||this.data||[];var a=this.picListData||[],d=e.slice(0,4),o=a.slice(0,4),r=0,l=d.length,c=null,h=null,u=o.length,m=Math.min(2*parseInt(l/2),2*parseInt(u/2));if(1>=m)this.hide();else{var p=function(){var e=t("<ul></ul>"),a=t.Deferred(),l=0;for(r=0;m>r;r++)c=d[r],c=t.extend({subutf8:c.utf8,idx:r,count:m,qid:i.pageModel.get("aspSID"),picurl:o[r].AdPicUrl},c),function(i,d,o){s.loadImage([o.picurl],function(i){l++,h=t(new n(o)).appendTo(e);var r=s.scaleFull(i,{width:118,height:88});h.find(".pic-loading-dot").hide(),h.find(".smaimg").css(r).attr("src",o.picurl),l>=d&&a.resolve(e)})}(r,m,c);return a};p().then(function(e){i.$body.parent().addClass("sma-container-pic"),i.$body.empty().append(e.children()),i.show()})}},show:function(){this.$el.show()},hide:function(){this.$el.hide()}}),i});