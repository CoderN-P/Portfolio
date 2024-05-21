
let selected = '';
let icon = '';
const blurs = ['physics', 'webdev', 'ai', 'robotics', 'app', 'engineering'];

const skillToIcon = {
    'python': '/static/images/python.svg',
    'java': 'java.svg',
    'c++': 'c-plusplus.svg',
}
$(document).ready(function () {
    const pathname = $(location).attr("pathname");

    if (pathname === "/") {

        $('#home').removeClass('font-bold');
        $('#home').addClass('text-blue-500 font-bold');
        showBlurs();
        $('#skillsLink').click(() => scrollToId('skills'));
    }


});

function changeSelected(id) {
    console.log(id);
    if (selected) {
        $(`#${selected}`).removeClass('dark:border-gray-600 border-2');
        $(`#${selected}`).addClass('dark:border-gray-800');
        if (selected === id) {
            selected = '';
            icon = '';
            $('#selectedImage').attr('src', '');
            $('#selectedImage').addClass('hidden');
            $(`#selectedText`).text('No icon selected');
            return;
        }
    }
    $(`#${id}`).removeClass('dark:border-gray-800');
    $(`#${id}`).addClass('dark:border-gray-600 border-2');
    $(`#selectedText`).text(id);
    selected = id;
    icon = skillToIcon[id];
    $('#selectedImage').attr('src', icon);
    $('#selectedImage').removeClass('hidden');

}


function scrollToId(id) {
    console.log(id);
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

function showBlurs() {
    blurs.forEach(blur => {
        let blurElement = $(`#${blur}`);
        $(`#${blur}Blur`).width(blurElement.width()+20);
        $(`#${blur}Blur`).height(blurElement.height()+20);
        $(`#${blur}Blur`).offset({top: blurElement.offset().top, left: blurElement.offset().left});

    });

}


