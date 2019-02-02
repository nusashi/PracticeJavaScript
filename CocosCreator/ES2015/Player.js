let Touch = require('Touch');

cc.Class({
    extends: Touch,

    properties: {
        //プレイヤーの最大滞空時間
        jumpDurationTime: 0.6,
        //プレイヤーのジャンプの高さ
        jumpHeight: 200,
        //ジャンプ中かどうか
        _isJumping: false,
    },

    onLoad: function () {
        //タッチリスナーの初期化
        //this.setTouchEvent();
        this.func();
    },

    // //タッチイベントの登録
    // setTouchEvent:function(){
    //     //ラムダ式用の変数を用意
    //     var self = this;
    //     //シングルタッチ
    //     cc.eventManeger.addListener({
    //         event:ccEventListener.TOUCH_ONE_BY_ONE,
    //         swallowTouch:true,
    //         //タッチ開始時
    //         onTouchBegan:function(touch,event){
    //             //プレイヤーをジャンプさせる
    //             self.jumpPlayer();
    //             //以降のイベントも取得する場合はtrueを返す
    //             return true;
    //         }
    //     },self.node);
    // },

    //プレイヤーのジャンプ
    jumpPlayer: function () {
        //ジャンプ中は反応させないようにする
        if (this._isJumping) {
            return;
        }
        //アニメーションをジャンプ用に変更する
        //var anim = this.node.getComponent(cc.Animation);
        //anim.Play('PlayerJump');

        //ジャンプ中
        this._isJumping = true;
        //無名関数でこのメソッドの変数を扱う為にselfを定義
        var self = this;

        //cc.jumpBy(時間,方向x,方向y,高さ,回数)
        var jumpAction = cc.jumpBy(this.jumpDurationTime, 0, 0, this.jumpHeight, 1);
        //着地したらジャンプフラグを解除する
        var endFunction = cc.callFunc(function () {
            self._isJumping = false;
            //走りモーションに戻す
            //anim.play('PlayerRunning');
        }, this);

        //アクション開始
        this.node.runAction(cc.sequence(
            jumpAction, endFunction
        ));
    },
});