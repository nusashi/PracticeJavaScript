cc.Class({
    extends: cc.Component,
    properties: {

    },

    onLoad: function () {



    },

    update: function () {

    },

    func: function () {
        var CanvasNode = cc.find('Canvas');
        CanvasNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log("test", event);
        });
    }

});