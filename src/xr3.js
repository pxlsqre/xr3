/* xr3 by @jzn99 */
(function ($, w, d, undifined) {
	var xr3 = {
		find : '.page',
		list : [],
		id : '.',
		url : false,
		check : /(#p_)/,
		globals : {},
		_get : function () {
			var bob = this;
			$(bob.find).each(function () {
				var __ = $(this);
				bob.list.push(__);
				var __ = $(this);
				__.data('pg') === true ? __.addClass('load') : __.removeClass('load'); return;
			});
			if (bob.url === true) bob._url();
			return bob.list;
		},
		_load : function (obj) {
			$('[data-pg]').removeClass('load');
			$(obj).addClass('load');
			$('[data-page]').removeClass('auto-load');
			$('[data-page]').each(function () {
				if ($(this).data('page').match(obj)) {
					$(this).addClass('auto-load');
				}
			});
		},
		_url : function () {
			var bob = this, ex = bob.check, url = window.location.href;
			if (url.match(ex)) {
				url = url.split(ex); url = url[url.length - 1]; url = url.replace(ex, '');
				bob._load(bob.id + url);
			}
		}
	};
	xr3.run = function () {
		var bob = this;
		bob._get();
		$(d).on('click', '[data-page]', function () {
			var __ = $(this);
			$('[data-pg]').removeClass('load');
			$(__.data('page')).addClass('load');
			$('[data-page]').removeClass('auto-load');
			__.addClass('auto-load');
		});
		return bob.list;
	};
	xr3.load = function (obj) {
		return this._load(obj) ? true : false;
	};
	window.xr3 = xr3;
})(jQuery, window, document);