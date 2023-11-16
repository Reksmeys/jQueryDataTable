// =============  Data Table - (Start) ================= //

$(function(){

    $('#example').DataTable({
        ajax:{
            url: 'data/data.json',    
        },
        columns:[
            {"data": "id"},
            {"data": "title"},
            {"data": "price"},
            {"data": "description"},
            {
                "data": "images[0]",
                "render": function(data, type, row, meta){
                    if(type == 'display'){
                      data = `<img src=${data} width="100" />`;
                    }
                    return data;
                  }
            },
            {
                "data": "creationAt",
                "render" : function(data, type){
                    if (type == "display"){
                        data = data.substring(0, 10)
                    }
                    return data
                }
            },
            {
                "data": "updatedAt",
                "render" : function(data, type){
                    if (type == "display"){
                        data = data.substring(0, 10)
                    }
                    return data
                }
            },
            {"data": "category.name"}
        ],
        dom: 'Blfrtip',
        buttons:['copy', 'csv', 'excel', 'pdf', 'print'],
    });
  
});



// =============  Data Table - (End) ================= //
