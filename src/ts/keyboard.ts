function Keyboard(d: { el, inputOn }) {
    // 渲染普通键盘
    this.el = d.el
    this.inputOn = d.inputOn
    if (this.el === undefined) {
        console.error('未指定容器');
        return
    }
    const keys = [{
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

    ]

    this.keyboardInput = (mode: number, name: string) => {
        let length = this.inputOn.value.length
        if (mode === 1) {
            this.inputOn.value += name
        } else if (mode === 0) {
            this.inputOn.value = ''
        } else if (mode === -1) {
            this.inputOn.value = this.inputOn.value.substr(0, length - 1)
        }

    }
    let boxWidth = document.querySelector(this.el).clientWidth
    let keySizeHeight = boxWidth * 0.06 + 'px'
    let keySizeWidth = boxWidth * 0.07 + 'px'
    let bigKeySizeWidth = boxWidth * 0.10 + 'px'

    let innerHTML = ''
    keys.forEach((item) => {


        // let key = document.createElement('div')
        // key.innerHTML = item.name
        // key.onclick = () => keyboardInput(item.inputMode, item.name)
        // key.className = 'keyboard-key'
        // keyboardBox.appendChild(key)

        let widthText = 'width:' + ((item.isLarge) ? bigKeySizeWidth : keySizeWidth) + ';'
        let heightText = 'height: ' + keySizeHeight + ';'
        let lineHeightText = 'line-height:' + keySizeHeight + ';'
        let cssText = widthText + heightText + lineHeightText
        let domA = '<div class= "keyboard-key" style=" ' + cssText + ' " onclick="Keyboard.keyboardInput(' + item.inputMode + ',' + item.name + ')">' + item.name + ' </div>'
        innerHTML = innerHTML + domA
    })
    document.querySelector(this.el).innerHTML = '<div class="keyboard-keyboardBox">' + innerHTML + '</div>'

}