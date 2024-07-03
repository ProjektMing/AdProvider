function AdGenerator() {
    // 获取select元素id=Type的值
    var type = document.getElementById('Type').value;

    // 获取广告id=Location的值
    var location = document.getElementById('Location').value;

    // 创建广告元素
    const adElement = document.createElement('div');
    adElement.style.position = 'absolute'; // Ensure the ad is positioned correctly within the container

    switch (type) {
        case 'Mihomo':
            // 连接到mihomo的官网
            adElement.innerHTML = '<a href="https://www.mihomo.com">Mihomo</a>';
            adElement.style.backgroundColor = 'yellow'; // Example style
            break;
        case 'PicACG':

            break;
        case 'SDK':

            break;
    }

    // 根据广告位置设置广告元素的位置
    switch (location) {
        case 'Top':
            adElement.style.top = '0';
            adElement.style.left = '50%';
            adElement.style.transform = 'translateX(-50%)';
            break;
        case 'Bottom':
            //固定在页面底部
            adElement.style.bottom = '0';
            adElement.style.left = '50%';
            adElement.style.transform = 'translateX(-50%)';
            break;
        case 'Left':
            adElement.style.top = '50%';
            adElement.style.left = '0';
            adElement.style.transform = 'translateY(-50%)';
            break;
        case 'Right':
            adElement.style.top = '50%';
            adElement.style.right = '0';
            adElement.style.transform = 'translateY(-50%)';
            break;
        case 'Center':
            adElement.style.top = '50%';
            adElement.style.left = '50%';
            adElement.style.transform = 'translate(-50%, -50%)';
            break;
    }

    // 将广告元素插入到广告容器中，可以在由来自html的选择的位置插入广告
    var adContainer = document.getElementById('adContainer');
    adContainer.appendChild(adElement);
}