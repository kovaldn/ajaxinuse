var FormSender = (function(){
 
    function init(){
        _setUpListners();
    }
 
    // Подключаем прослушку событий
    function _setUpListners(){
        $('#my-form').on('submit', _getUsers);
        $('#admin-form').on('submit', _createUser);
    }
 
    // Обработка сабмита формы
    function _getUsers(ev){
    	console.log('in _getUsers');
        ev.preventDefault();
 
        var form = $(this),
            url = 'getuser.php',
            defObject = _ajaxForm(form, url);
 
        defObject.done(function(ans){
            var ul = $('.list');
            for (var item in ans){
                var markup = '<li>' + item + ":" + ans[item] + '</li>';
                ul.append(markup);
            }
        });
 
    }

    function _createUser(ev) {
    	console.log('in _createUser');
    	ev.preventDefault();

    	var form = $(this),
            url = 'createuser.php',
            defObject = _ajaxForm(form, url);
 
        defObject.done(function(ans){
            form.append('<p>Пользователь добавлен</p>');
        });
    }
 
    // Универсальная функция ajax
    function _ajaxForm(form, url){
 
        var data = form.serialize(); 
        console.log(data);
 
        var defObj = $.ajax({
                type : "POST",
                url : url,
                dataType : "JSON",
                data: data
            }).fail( function(){
                console.log('Проблемы на стороне сервера');
            });
 
        return defObj;
    }
 
    // Возвращаем в глобальную область видимости
    return {
        init: init
    };
 
}());
 
FormSender.init();