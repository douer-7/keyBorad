function Keyboard(d: { el, inputOn }) {
    // 渲染普通键盘
    this.el = d.el
    this.inputOn = d.inputOn
    if (this.el === undefined) {
        console.error('未指定容器');
        return
    }
    const keys = [
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

    ]

    this.keyboardInput = (mode: number, name: string) => {
        let inputOn = document.querySelector(this.inputOn)        
        if (mode === 1) {
            inputOn.value += name
        } else if (mode === 0) {
            inputOn.value = ''
        } else if (mode === -1) {
            inputOn.value = inputOn.value.substr(0, inputOn.value.length - 1)
        }
    }
    let boxWidth = document.querySelector(this.el).clientWidth
    let keySizeHeight = boxWidth * 0.2 + 'px'
    let keySizeWidth = boxWidth * 0.23 + 'px'
    let bigKeySizeWidth = boxWidth * 0.26 + 'px'

    let innerHTML = ''
    keys.forEach((item) => {
        let widthText = 'width:' + ((item.isLarge) ? bigKeySizeWidth : keySizeWidth) + ';'
        let heightText = 'height: ' + keySizeHeight + ';'
        let lineHeightText = 'line-height:' + keySizeHeight + ';'
        let cssText = 'style= "' + widthText + heightText + lineHeightText + '"'
        let onclick = 'onclick="keyBorad.keyboardInput(' + item.inputMode + ',' + "'" + item.name + "'" + ')"'
        let domA = '<div class= "keyboard-key" ' + cssText + onclick + '>' + item.name + ' </div>'
        innerHTML = innerHTML + domA
    })
    document.querySelector(this.el).innerHTML = '<div class="keyboard-keyboardBox">' + innerHTML + '</div>'

}