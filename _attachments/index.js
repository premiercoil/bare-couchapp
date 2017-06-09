$(()=>{
    var main = $('#main')

    main.html(nav(
        a('/', 'root')
        ,
        "|"
        ,
        a('http://localhost:5984/_utils', 'testapp')
    ))
})
