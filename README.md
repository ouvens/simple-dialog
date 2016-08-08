

------
#### 简单的对话框
-----

```javascript
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
```

- 举例

```javascript

require('jquery.dialog');

$.dialog.alert('提示');

$.dialog.extend({
    title: '页面提示',
    content: '操作成功',
    icon: 'i-success',
    submitText: '确定',
    cancelText: '取消',
    confirmCallback: function() {
        alert(1)
    },
    cancelCallback: function() {
        hide(2);
    },
    extend: '扩展内容'
});

$.dialog.info({
    title: '页面提示',
    content: '信息提示',
    icon: 'i-info',
    submitText: '确定',
    cancelText: '取消',
    confirmCallback: function() {
        alert(1)
    },
    cancelCallback: function() {
        hide(2);
    }
});

$.dialog.warn({
    title: '页面提示',
    content: '警告提示',
    icon: 'i-warn',
    submitText: '确定',
    cancelText: '取消',
    confirmCallback: function() {
        alert(1)
    },
    cancelCallback: function() {
        hide(2);
    }
});

$.dialog.extend({
    title: '页面提示',
    content: '扩展内容',
    icon: 'i-warn',
    submitText: '确定',
    cancelText: '取消',
    confirmCallback: function() {
        alert(1)
    },
    cancelCallback: function() {
        hide(2);
    },
    extend: '扩展内容'
});


```
