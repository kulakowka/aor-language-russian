module.exports = {
    aor: {
        action: {
            delete: 'Удалить',
            show: 'Просмотр',
            list: 'Список',
            save: 'Сохранить',
            create: 'Создать',
            edit: 'Редактировать',
            cancel: 'Отмена',
            refresh: 'Обновить',
            add_filter: 'Добавить фильтр',
            remove_filter: 'Убрать фильтр',
        },
        boolean: {
            true: 'Да',
            false: 'Нет',
        },
        page: {
            list: 'Список %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Создать %{name}',
            delete: 'Удалить %{name} #%{id}',
        },
        input: {
            image: {
                upload_several: 'Перетащите файлы сюда или нажмите для выбора.',
                upload_single: 'Перетащите файл сюда или нажмите для выбора.',
            },
        },
        message: {
            yes: 'Да',
            no: 'Нет',
            are_you_sure: 'Вы уверены?',
            about: 'Справка',
        },
        navigation: {
            page_out_of_boundaries: 'Страница %{page} вне границ',
            page_out_from_end: 'Невозможно переместиться дальше последней страницы',
            page_out_from_begin: 'Номер страницы не может быть меньше 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} из %{total}',
            next: 'Следующая',
            prev: 'Предыдущая',
        },
        auth: {
            username: 'Имя пользователя',
            password: 'Пароль',
            sign_in: 'Войти',
            sign_in_error: 'Ошибка аутентификации, попробуйте снова',
            logout: 'Выйти',
        },
        notification: {
            updated: 'Элемент обновлен',
            created: 'Элемент создан',
            deleted: 'Элемент удален',
            item_doesnt_exist: 'Элемент не существует',
            http_error: 'Ошибка сервера',
        },
        validation: {
            required: 'Обязательно для заполнения',
        },
    },
};