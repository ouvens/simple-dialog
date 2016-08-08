/**
 * author: ouvenzhang
 * 对话框提示
 * $.dialog.alert(opts) // 通用弹出框
 * $.dialog.conform(opts)	// 通用选择对话框
 * $.dialog.info(opts)	// 通用信息提示
 * $.dialog.warn(opts)	// 通用警告对话框
 * $.dialog.extend(opts)// 通用扩展自定义内容对话框
 * opts：{
		title: '页面提示', // 对话框标题
		content: '提示',	//对话框内容
		icon: 'i-alert',	// 顶部显示的图标，如果没有则不显示，可以选择i-alert、i-info、i-warn	
		submitText: '确定',	//对话框确定文字
		cancelText: '取消',	//对话框取消文字
		extend : '扩展操作按钮内容', // 底部操作扩展内容，填入html
		confirmCallback: function() {	//确定后执行回调
			$('#uiDialog').hide();
		},
		cancelCallback: function() {	//取消后执行回调
			$('#uiDialog').hide();
		}
 * }
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node, CommonJS之类的
		module.exports = factory(require('jquery'));
	} else {
		// 浏览器全局变量(root 即 window)
		root['jQuery'] = factory(root['jQuery']);
	}
})(this, function($) {

	$.dialog = {};
	var config = {
		title: '页面提示',
		content: '提示',
		icon: '',
		submitText: '确定',
		cancelText: '取消',
		confirmCallback: function() {
			hide();
		},
		cancelCallback: function() {
			hide();
		},
		extend: '其它内容'
	};

	$.dialog = {
		// 警告提示
		alert: function(opts) {
			if (typeof opts === 'string') {
				opts = $.extend(config, {
					content: opts,
					type: 'alert'
				}, true);
			} else {
				opts = $.extend(config, opts, true);
				opts['type'] = 'alert';
			}
			this._dialog(opts);
		},
		// 确认提示
		confirm: function(opts) {
			if (typeof opts === 'string') {
				opts = $.extend(config, {
					content: opts,
					type: 'confirm'
				}, true);
			} else {
				opts = $.extend(config, opts, true);
				opts['type'] = 'confirm';
			}
			opts['type'] = 'confirm';
			this._dialog(opts);
		},
		// 信息提示
		info: function(opts) {
			if (typeof opts === 'string') {
				opts = $.extend(config, {
					content: opts,
					type: 'info'
				}, true);
			} else {
				opts = $.extend(config, opts, true);
				opts['type'] = 'info';
			}
			opts['type'] = 'info';
			this._dialog(opts);
		},
		// 警告提示
		warn: function(opts) {
			if (typeof opts === 'string') {
				opts = $.extend(config, {
					content: opts,
					type: 'warn'
				}, true);
			} else {
				opts = $.extend(config, opts, true);
				opts['type'] = 'warn';
			}
			// body..
			opts['type'] = 'warn';
			this._dialog(opts);
		},
		// 警告提示
		extend: function(opts) {
			if (typeof opts === 'string') {
				opts = $.extend(config, {
					content: opts,
					type: 'extend'
				}, true);
			} else {
				opts = $.extend(config, opts, true);
				opts['type'] = 'extend';
			}
			// body..
			opts['type'] = 'extend';
			this._dialog(opts);
		},

		// 通用流程处理
		_dialog: function(opts) {

			var self = this,
				html,
				$dialog;

			if ($('#uiDialog')) {
				$('body').append(_render(opts));
			}

			$dialog = $('#uiDialog');

			switch (opts.type) {
				case 'alert':
					$dialog.find('.btn-cancel').hide();
					break;
				case 'info':
					$dialog.find('.btn-cancel').hide();
					break;
				case 'extend':
					$dialog.find('.btn').hide();
					$dialog.find('.extend').show();
				default:
					break;
			}
			$dialog.show();

			self._bindEvent(opts);
		},

		hide: hide,

		_bindEvent: function(opts) {
			// body...
			var $dialog = $('#uiDialog'),
				self = this;
			$dialog.on('click', '.i-close', function(e) {
				self.hide();
			}).on('click', '.btn-confirm', function(e) {
				opts.confirmCallback();
				self.hide();
			}).on('click', '.btn-cancel', function(e) {
				opts.cancelCallback();
				self.hide();
			});
		}
	};

	// 关闭对话框
	function hide() {
		$('#uiDialog').hide().off('click').remove()
	}

	// 渲染对话框内容
	function _render(opts) {
		// body...
		return '<div class="ui-dialog ' + opts.type + '" id="uiDialog"><div class="dialog-frame">' +
			'<i class="i-close"></i>' +
			'<i class="i-icon ' + (opts.icon || '') + '"></i>' +
			'<div class="dialog-hd">' + opts.title + '</div>' +
			'<div class="dialog-bd">' + opts.content + '</div>' +
			'<div class="dialog-ft">' +
			'<span class="btn btn-confirm btn-first">' + opts.submitText + '</span>' +
			'<span class="btn btn-cancel">' + opts.cancelText + '</span>' +
			'<div class="extend"> ' + opts.extend + ' </div>' +
			'</div></div>'
		'<div>';
	}

	return $;
});