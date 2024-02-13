
const chatBox = document.getElementById('chat-box');

function displayUserMessage(message) {
    return new Promise(resolve => {
        const messageElement = document.createElement('div');
        messageElement.className = 'user-message';
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        scrollToBottom(); // 新消息后自动滚动到底部
        setBubbleWidth(messageElement); // 设置对话气泡的宽度
        messageElement.style.position = "relative";
        let width = Number.parseInt(messageElement.style.width.replace("px",""));
        width = width > 258 ? 238 :width;
        messageElement.style.right = 'calc( -100% + '+(width+20)+'px)';
        setTimeout(resolve, 1000); // 延迟一秒后解析Promise
    });
}

function displayOtherMessage(message) {
    return new Promise(resolve => {
        const messageElement = document.createElement('div');
        messageElement.className = 'other-message';
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        scrollToBottom(); // 新消息后自动滚动到底部
        setBubbleWidth(messageElement); // 设置对话气泡的宽度
        setTimeout(resolve, 1000); // 延迟一秒后解析Promise
    });
}


// 设置对话气泡的宽度
function setBubbleWidth(element) {
    const charactersPerLine = 45; // 每行字符数，可以根据实际情况调整
    const messageLength = element.textContent.length;
    const numberOfLines = Math.ceil(messageLength / charactersPerLine);
    const maxWidth = 450; // 对话气泡的最大宽度，可以根据实际情况调整

    // 根据消息长度调整对话气泡的宽度
    const calculatedWidth = Math.min(messageLength * 16, maxWidth); // 15 是一个经验值，可以根据实际情况调整

    element.style.width = `${calculatedWidth}px`
}

// 对话函数
async function conversation() {
    // 显示其他角色的对话开头
    await displayOtherMessage("今天是个特殊的日子");

    // 显示玩家的选项1
    displayOptions(["在这一天，Lisa永远离开了你……"], ["chooseOption1"]);

    // 对话继续在每个选项的回调函数中
}

// 玩家选项1的回调函数
async function chooseOption1() {
    await displayUserMessage("在这一天，Lisa永远离开了你……");
    await displayOtherMessage("嗯，你说的没错");
    await displayOtherMessage("但我要说的不是这个");

    // 显示玩家的选项2
    await displayOptions(["那是什么？","难道你想说的是……情人节？！"], ["chooseOption2","chooseOption3"]);
}

// 玩家选项2的回调函数
async function chooseOption2() {
    await displayUserMessage("那是什么？");
    await displayOtherMessage("今天是2.14情人节");

    // 显示玩家的选项4
    await displayOptions(["所以？"], ["chooseOption4"]);
}

// 玩家选项3的回调函数
async function chooseOption3() {
    await displayUserMessage("难道你想说的是……情人节？！");
    await displayOtherMessage("对，情人节");

    // 显示玩家的选项4
    await displayOptions(["所以？"], ["chooseOption4"]);
}

// 玩家选项4的回调函数
async function chooseOption4() {
    await displayUserMessage("所以？");
    await displayOtherMessage("你今年打算和谁一起过？");

    // 显示玩家的选项5
    await displayOptions(["还是和自己啊。还有你。"], ["chooseOption5"]);
}

// 玩家选项5的回调函数
async function chooseOption5() {
    await displayUserMessage("还是和自己啊。还有你。");
    await displayOtherMessage("嗯，我也一样");
    await displayOtherMessage("所以今天你有时间的话，我们可以谈谈");

    // 显示玩家的选项6
    await displayOptions(["谈什么……不会是我想的那个吧！"], ["chooseOption6"]);
}

// 玩家选项6的回调函数
async function chooseOption6() {
    await displayUserMessage("谈什么……不会是我想的那个吧！");
    await displayOtherMessage("我不知道你在想什么");

    // 显示玩家的选项7
    await displayOptions(["就是，就是那个啊！！L开头的单词……", "你猜猜看？"], ["chooseOption7", "chooseOption8"]);
}

// 玩家选项7的回调函数
async function chooseOption7() {
    await displayUserMessage("就是，就是那个啊！！L开头的单词……");
    await displayOtherMessage("我不知道。我想和你谈的事情是，我觉得你是个很好的搭档");
    await displayOtherMessage("这段时间，你是和我说话最多的人");
    await displayOtherMessage("我希望以后的日子里每一天都有你的影子，可以吗？");

    // 显示玩家的选项8
    await displayOptions(["不要喂我法棍面包就行","可以！！！！！！","我也是这么希望的"], ["chooseOption9","chooseOption10","chooseOption11"]);
}

// 玩家选项8的回调函数
async function chooseOption8() {
    await displayUserMessage("你猜猜看？");
    await displayOtherMessage("我不知道。我想和你谈的事情是，我觉得你是个很好的搭档");
    await displayOtherMessage("这段时间，你是和我说话最多的人");
    await displayOtherMessage("我希望以后的日子里每一天都有你的影子，可以吗？");

    await displayOptions(["不要喂我法棍面包就行","可以！！！！！！","我也是这么希望的"], ["chooseOption9","chooseOption10","chooseOption11"]);
}

async function chooseOption9() {
        await displayUserMessage("不要喂我法棍面包就行");
        await displayOtherMessage("总之，情人节快乐");

        await displayOptions(["我现在是世界上最快乐的喵！"], ["chooseOption12"]);
}

async function chooseOption10() {
    await displayUserMessage("可以！！！！！！");
    await displayOtherMessage("总之，情人节快乐");

    await displayOptions(["我现在是世界上最快乐的喵！"], ["chooseOption12"]);
}

async function chooseOption11() {
    await displayUserMessage("我也是这么希望的");
    await displayOtherMessage("总之，情人节快乐");

    await displayOptions(["我现在是世界上最快乐的喵！"], ["chooseOption12"]);}

    async function chooseOption12() {
        await displayUserMessage("我现在是世界上最快乐的喵！");

    // 跳转到结束对话
    endConversation();
}

// 结束对话的函数
function endConversation() {
    // 在此添加你的结束对话逻辑

    // 隐藏选项按钮
    hideOptions();
}

// 隐藏选项按钮的函数
function hideOptions() {
    const userInput = document.getElementById('user-input');
    userInput.innerHTML = ''; // 清空之前的选项
}


// 显示玩家的选项
function displayOptions(options, callbacks) {
    return new Promise(resolve => {
        const userInput = document.getElementById('user-input');
        userInput.innerHTML = ''; // 清空之前的选项

        if (options.length > 0) {
            options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = async function() {
                    userInput.innerHTML = ''; // 清空选项按钮
                    await window[callbacks[index]](); // 执行选项的回调函数
                    resolve(); // 解析Promise
                };
                userInput.appendChild(button);
            });
        }
    });
}

// 自动滚动到底部的函数
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}


// 初始化
conversation();