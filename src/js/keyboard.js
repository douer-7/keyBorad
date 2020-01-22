function Keyboard(d) {
    var _this = this;
    this.el = d.el;
    this.inputOn = d.inputOn;
    if (this.el === undefined) {
        console.error('未指定容器');
        return;
    }
    var keys = [{
            name: 'Q',
            inputMode: 1
        },
        {
            name: 'W',
            inputMode: 1
        },
        {
            name: 'E',
            inputMode: 1
        },
        {
            name: 'R',
            inputMode: 1
        },
        {
            name: 'T',
            inputMode: 1
        },
        {
            name: 'Y',
            inputMode: 1
        },
        {
            name: 'U',
            inputMode: 1
        },
        {
            name: 'I',
            inputMode: 1
        },
        {
            name: 'P',
            inputMode: 1
        },
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
            name: 'A',
            inputMode: 1
        },
        {
            name: 'S',
            inputMode: 1
        },
        {
            name: 'D',
            inputMode: 1
        },
        {
            name: 'F',
            inputMode: 1
        },
        {
            name: 'G',
            inputMode: 1
        },
        {
            name: 'H',
            inputMode: 1
        },
        {
            name: 'J',
            inputMode: 1
        },
        {
            name: 'K',
            inputMode: 1
        },
        {
            name: 'O',
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
            name: 'Z',
            inputMode: 1
        },
        {
            name: 'X',
            inputMode: 1
        },
        {
            name: 'C',
            inputMode: 1
        },
        {
            name: 'V',
            inputMode: 1
        },
        {
            name: 'B',
            inputMode: 1
        },
        {
            name: 'N',
            inputMode: 1
        },
        {
            name: 'M',
            inputMode: 1
        },
        {
            name: 'L',
            inputMode: 1
        },
        {
            name: '*',
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
        var length = _this.inputOn.value.length;
        if (mode === 1) {
            _this.inputOn.value += name;
        }
        else if (mode === 0) {
            _this.inputOn.value = '';
        }
        else if (mode === -1) {
            _this.inputOn.value = _this.inputOn.value.substr(0, length - 1);
        }
    };
    var boxWidth = document.querySelector(this.el).clientWidth;
    var keySizeHeight = boxWidth * 0.06 + 'px';
    var keySizeWidth = boxWidth * 0.07 + 'px';
    var bigKeySizeWidth = boxWidth * 0.10 + 'px';
    var innerHTML = '';
    keys.forEach(function (item) {
        var widthText = 'width:' + ((item.isLarge) ? bigKeySizeWidth : keySizeWidth) + ';';
        var heightText = 'height: ' + keySizeHeight + ';';
        var lineHeightText = 'line-height:' + keySizeHeight + ';';
        var cssText = widthText + heightText + lineHeightText;
        var domA = '<div class= "keyboard-key" style=" ' + cssText + ' " onclick="keyboard.keyboardInput(' + item.inputMode + ',' + item.name + ')">' + item.name + ' </div>';
        innerHTML = innerHTML + domA;
    });
    document.querySelector(this.el).innerHTML = '<div class="keyboard-keyboardBox">' + innerHTML + '</div>';
}
