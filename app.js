alert("WELCOME TO OUR WEBSITE WE ARE SO GLAD TO BE HERE");




function askUser(){
            var userInput= prompt("We provide now these products please type one of these in the box below \n \"book or notebook or stapler\"");
            while(userInput != "book" && userInput != "notebook" && userInput !="stapler"){
                userInput= prompt("We provide now these products please type one of these in the box below \n \"book or notebook or stapler\"");
            }

            var iterationNo= prompt("How Many One You Want");
            var selectedItem;
        if(userInput=="book"){
            selectedItem='<img  class="addedImage" src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F098e1a95-c754-4a8b-b7da-acedc702aae1.jpg?source=next-opengraph&fit=scale-down&width=900" alt="Book">'
        }else if(userInput=="notebook"){
            selectedItem='<img  class="addedImage" src="http://cdn.shopify.com/s/files/1/1722/0531/products/notebook-chambray_grande.jpg?v=1571439076" alt="Book">'
        }
        else if(userInput=="stapler"){
            selectedItem='<img  class="addedImage" src="https://5.imimg.com/data5/AF/TV/MY-65633965/stapler-500x500.jpg" alt="Book">'
        }

        for(i=0;i<iterationNo;i++){
            document.write(selectedItem);
        }
        

}