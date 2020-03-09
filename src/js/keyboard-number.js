function Keyboard(d) {
    var _this = this;
    this.el = d.el;
    this.inputOn = d.inputOn;
    if (this.el === undefined) {
        console.error('未指定容器');
        return;
    }
    var keys = [
        {
            name: '撤退',
            isLarge: true,
            inputMode: -1
        },
        {
            name: '7',
            inputMode: 1
        },
        {
            name: '8',
            inputMode: 1
        },
        {
            name: '9',
            inputMode: 1
        },
        {
            name: '清空',
            isLarge: true,
            inputMode: 0
        },
        {
            name: '4',
            inputMode: 1
        },
        {
            name: '5',
            inputMode: 1
        },
        {
            name: '6',
            inputMode: 1
        },
        {
            name: '0',
            isLarge: true,
            inputMode: 1
        },
        {
            name: '1',
            inputMode: 1
        },
        {
            name: '2',
            inputMode: 1
        },
        {
            name: '3',
            inputMode: 1
        }
    ];
    this.keyboardInput = function (mode, name) {
        var inputOn = document.querySelector(_this.inputOn);
        if (mode === 1) {
            inputOn.value += name;
        }
        else if (mode === 0) {
            inputOn.value = '';
        }
        else if (mode === -1) {
            inputOn.value = inputOn.value.substr(0, inputOn.value.length - 1);
        }
    };
    var boxWidth = document.querySelector(this.el).clientWidth;
    var keySizeHeight = boxWidth * 0.2 + 'px';
    var keySizeWidth = boxWidth * 0.23 + 'px';
    var bigKeySizeWidth = boxWidth * 0.26 + 'px';
    var innerHTML = '';
    keys.forEach(function (item) {
        var widthText = 'width:' + ((item.isLarge) ? bigKeySizeWidth : keySizeWidth) + ';';
        var heightText = 'height: ' + keySizeHeight + ';';
        var lineHeightText = 'line-height:' + keySizeHeight + ';';
        var cssText = 'style= "' + widthText + heightText + lineHeightText + '"';
        var onclick = 'onclick="keyBorad.keyboardInput(' + item.inputMode + ',' + "'" + item.name + "'" + ')"';
        var domA = '<div class= "keyboard-key" ' + cssText + onclick + '>' + item.name + ' </div>';
        innerHTML = innerHTML + domA;
    });
    document.querySelector(this.el).innerHTML = '<div class="keyboard-keyboardBox">' + innerHTML + '</div>';
}
