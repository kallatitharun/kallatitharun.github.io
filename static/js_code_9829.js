document.getElementById('ipinfo').onchange = function() {
    document.getElementById('Location').value=''
    document.getElementById('Location').disabled = this.checked;
};

function submit_data(event)
{
    Keyword=document.getElementById("Keyword")
    Distance=document.getElementById("Distance")
    Distance.value=Math.round(Distance.value*1609.34)
    console.log(Distance)
    Category=document.getElementById("Category")
    Location=document.getElementById("Location")
    console.log(Keyword.value,Distance.value,Category.value,Location.value)
    // var lat=0
    // var lng=0
    console.log(document.getElementById('ipinfo').checked,document.getElementById('ipinfo'))
    if (document.getElementById('ipinfo').checked) {
            let ip_details = new XMLHttpRequest();
            ip_details.open("GET", "https://ipinfo.io/json?token=1bbc38aae32625",false);
            ip_details.send();
            if (ip_details.status == 200) {
                console.log(JSON.parse(ip_details.response));
                obj1 = JSON.parse(ip_details.response)
                if(obj1.status!="OK")
                {
                    x=document.getElementById("insert")
                     x.style.textAlign="Center"
                    x.style.alignContent="Center"
                    x.innerHTML="No Record has been found"

                    return
                }
                temp = obj1.loc
                temp.toString()
                temp2 = temp.split(',')
                lat = temp2[0]
                lng = temp2[1]
                console.log(lat, lng)
            }
            else {
                if(obj1.status!="OK")
                {
                    x=document.getElementById("insert")
                     x.style.textAlign="Center"
                    x.style.alignContent="Center"
                    x.innerHTML="No Record has been found"

                    return
                }
                console.log('error ${request.status} {request.statusText}')
            }

        }
    else {

            var ip_details = new XMLHttpRequest();
            ip_details.open("GET", "/lookup?address=" + document.getElementById('Location').value,false);
            ip_details.send();
                if (ip_details.status == 200)
                {
                    obj2 = JSON.parse(ip_details.response)
                    console.log(obj2)
                    lat=obj2.lat
                    lng=obj2.lng
                    temp2 = [obj2.lat, obj2.lng]
                    console.log(lat,lng)
                }
                else
                {
                    console.log('error ${request.status} {request.statusText}')
                }
            }

    usethis()
    function usethis(){
        let request = new XMLHttpRequest();
        console.log(lat, lng)
        request.open("GET", "/index?Keyword=" + Keyword.value + "&Distance=" + Distance.value + "&Category=" + Category.value+ "&lat=" + lat + "&lng=" + lng);
        request.send();
        request.onload = () => {
            console.log(request);
            if (request.status == 200) {
                temp3 = JSON.parse(request.response)
                // ramp = document.getElementById("insert");
                var x = document.getElementById("insert")
                var y = document.createElement("table")
                x.appendChild(y)
                y.setAttribute("id", "mytable")
                var heade = y.insertRow(0)
                var idie = heade.insertCell(0)
                idie.style.width="60px"
                idie.innerHTML = "No."
                var imaege = heade.insertCell(1)
                imaege.innerHTML = "Image"
                var BusinessName = heade.insertCell(2)
                BusinessName.style.width="800px"
                BusinessName.style.cursor="pointer"

                BusinessName.innerHTML = "BusinessName"
                var Rating = heade.insertCell(3)
                Rating.innerHTML = "Rating"
                Rating.style.cursor="pointer"
                Rating.style.width="200px"
                var Distance = heade.insertCell(4)
                Distance.style.width="200px"
               Distance.style.cursor="pointer"
                Distance.innerHTML = "Distance(miles)"
                heade.style.padding = "100px";
                heade.style.backgroundColor = "#4e6fac";
                heade.style.height="75px"

                yup=temp3['BusinessName']
                if (temp3.length==0)
                {
                    x.style.textAlign="Center"
                    x.style.alignContent="Center"
                    x.innerHTML="No Record has been found"


                    return
                }
                for (var i = 1; i <= temp3.length; i++) {
                    var heade1 = y.insertRow(i)

                    var idie1 = heade1.insertCell(0)
                    idie1.innerHTML = i
                    var imaege1 = heade1.insertCell(1)
                    var img1=document.createElement('img');
                    img1.src=temp3[i - 1].Image
                    img1.width='150'
                    img1.height='150'
                    imaege1.appendChild(img1)
                    var BusinessName1 = heade1.insertCell(2)

                    // BusinessName1.innerHTML = temp3[i - 1].BusinessName
                    var span_iter=document.createElement("SPAN");
                    span_iter.innerHTML = temp3[i - 1].BusinessName
                    // BusinessName1.innerHTML=span_iter
                    span_iter.setAttribute("class","span_iter_class")
                    span_iter.style.cursor="pointer"
                    span_iter.style.hover="light gray"
                    BusinessName1.appendChild(span_iter)
                    var Rating1 = heade1.insertCell(3)
                    Rating1.innerHTML = temp3[i - 1].Rating
                    var Distance1 = heade1.insertCell(4)
                    Distance1.innerHTML = Math.round(((temp3[i - 1]['Distance']/1609.34)*100))/100
                }
                Go_insert()
                var rowees = document.getElementById("mytable")
                var rowes = rowees.rows
                console.log("hello")
                console.log(rowes)
                table = document.getElementById("mytable");
                var rowss = table.rows
                for (var n = 0; n < 5; n++) (function (n) {
                    console.log(rowss[0].getElementsByTagName("TD")[n])
                    rowss[0].getElementsByTagName("TD")[n].onclick = function sortTable() {
                        console.log(n)
                        var table;
                        table = document.getElementById("mytable");
                        var rows, i, r1, r2, count = 0;
                        var switching = true;
                        var direction = "ascending";
                        while (switching) {
                            switching = false;
                            var rows = table.rows;

                            for (i = 1; i < (rows.length - 1); i++) {
                                var Switch = false;
                                r1 = rows[i].getElementsByTagName("TD")[n];
                                console.log(i, n, r1)
                                r2 = rows[i + 1].getElementsByTagName("TD")[n];

                                if (direction == "ascending") {
                                    if (r1.innerHTML.toLowerCase() > r2.innerHTML.toLowerCase()) {
                                        Switch = true;
                                        break;
                                    }
                                } else if (direction == "descending") {
                                    if (r1.innerHTML.toLowerCase() < r2.innerHTML.toLowerCase()) {
                                        Switch = true;
                                        break;
                                    }
                                }
                            }
                            if (Switch) {
                                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                                switching = true;
                                count++;
                            } else {
                                if (count == 0 && direction == "ascending") {
                                    direction = "descending";
                                    switching = true;
                                }
                            }
                        }
                    }
                })(n);
                heade.onclick=function reorderNos(){
                        for (i = 1; i < (rowss.length); i++){
                            document.getElementById("mytable").rows[i].cells[0].innerHTML=i
                        }
                    };
                for (var i = 0; i < temp3.length; i++) (function (i) {
                    console.log(rowes[i])

                    // var temp_for_biz=rowes[i+1].cells[2].get
                    // rowes[i+1].cells[2].getElementsByTagName("P")
                        rowes[i+1].cells[2].onclick = function get_details() {
                        let request = new XMLHttpRequest();
                        request.open("GET", "/businesssearch?idie=" + temp3[i].idie);
                        request.send();
                        // yippee=yup[i]
                        request.onload = () => {
                            console.log(request);
                            if (request.status == 200) {
                                r = JSON.parse(request.response)
                                console.log(r)
                                yippee=r['name']
                                Status = r['hours'][0]['is_open_now']
                                Address = r['location']['display_address'].join(' ')
                                Category = r['categories'][0]['title']
                                phonenumber = r['display_phone']
                                price = r['price']
                                photos = r['photos']

                                Moreinfo = r.url
                                ramp  = document.getElementById("insert_here");
                                ramp.innerHTML=''

                                var t2=document.createElement('DIV')
                                t2.setAttribute('id','Bus_Head')
                                var t0=document.createElement('P')
                                t0.style.font="normal bold 28px Helvetica Full Stack,sans-serif"
                                t0.innerHTML=yippee
                                t0.style.textAlign = "center";
                                t0.style.width="600px"
                                t2.style.width="600px"
                                t2.style.alignContent = "center";
                                t2.appendChild(t0)
                                ramp.appendChild(t2)
                                var hline = document.createElement("HR");
                                hline.style.color="gray"
                                hline.style.textAlign="center"
                                t2.appendChild(hline)
                                temp=''
                                temp+="<div id='myDIV'>"
                                temp+=    "<div id ='stat'   >Status</div>"
                                temp+=    "<div id= 'cat' >Category</div>"
                                temp+=    "<div id='addy' >Address</div>"
                                temp+=    "<div id='phony' >Phone Number</div>"
                                temp+=    "<div id='ts1'>Transactions Supported</div>"
                                temp+=    "<div id='pri'>Price</div>"
                                temp+="<div id='Moreinfo'>"
                                temp+="Moreinfo<br>"
                                temp+="<a href="
                                temp+= Moreinfo
                                temp+=">Yelp</a></div>"
                                temp+="</div>"
                                ramp.innerHTML+=temp
                                var var_moreinfo=document.getElementById('Moreinfo')
                                var_moreinfo.style.font="normal bold 25px Helvetica Full Stack,sans-serif"
                                var t1=document.getElementById('stat')
                                t1.style.font="normal bold 25px Helvetica Full Stack,sans-serif"
                                var t2=document.createElement('P')
                                t2.setAttribute('id','pavana')
                                t2.style.font="normal normal 15px Helvetica Full Stack,sans-serif"
                                var loya_iter=document.createElement("LABEL")
                                loya_iter.style.font="normal normal 15px Helvetica Full Stack,sans-serif"
                                loya_iter.htmlFor='pavana'
                                loya_iter.style.width="30px";
                                    loya_iter.style.height="30px";
                                    t1.style.backgroundSize="30px 30px"
                                    loya_iter.style.borderRadius = "10px";
                                    loya_iter.style.padding = "10px 10px";
                                    t2.style.fontSize="15px"
                                    loya_iter.style.color= "black"
                                t1.style.alignContent="left"
                                if(Status.toString().toLowerCase()=="false") {
                                    loya_iter.innerHTML="  Open  "
                                    loya_iter.style.backgroundColor="Green"
                                }
                                else{
                                    loya_iter.innerHTML="Closed"
                                    loya_iter.style.backgroundColor="Red"
                                }
                                loya_iter.style.marginLeft="-4px"

                                t1.appendChild(t2)
                                t1.appendChild(loya_iter)
                                var t3=document.getElementById('cat')
                                var t4=document.createElement('P')
                                t4.innerHTML=Category
                                t3.appendChild(t4)
                                t3.style.font="normal bold 25px Helvetica Full Stack,sans-serif"
                                t4.style.font="normal normal 15px Helvetica Full Stack,sans-serif"
                                var t5=document.getElementById('addy')
                                var t6=document.createElement('P')
                                t5.style.font="normal bold 25px Helvetica Full Stack,sans-serif"
                                t6.style.font="normal normal 15px Helvetica Full Stack,sans-serif"
                                t6.innerHTML=Address
                                t5.appendChild(t6)
                                var t7=document.getElementById('phony')
                                var t8=document.createElement('P')
                                t7.style.font="normal bold 25px Helvetica Full Stack,sans-serif"
                                t8.style.font="normal normal 15px Helvetica Full Stack,sans-serif"
                                t8.innerHTML=phonenumber
                                t7.appendChild(t8)
                                var t9=document.getElementById('ts1')
                                var t10=document.createElement('P')
                                t9.style.font="normal bold 25px Helvetica Full Stack,sans-serif"
                                t10.style.font="normal normal 15px Helvetica Full Stack,sans-serif"
                                if(r['transactions'].length>0) {
                                    t9.appendChild(t10)
                                }
                                else{

                                    t9.remove()
                                }
                                TS = r['transactions'].join('|')
                                t10.innerHTML=TS
                                var t11=document.getElementById('pri')
                                var t12=document.createElement('P')
                                t11.style.font="normal bold 25px Helvetica Full Stack,sans-serif"
                                t12.style.font="normal normal 15px Helvetica Full Stack,sans-serif"
                                if(price) {
                                    t11.appendChild(t12)

                                }
                                else{
                                    t11.remove()
                                }
                                t12.innerHTML=price
                                temp="<div id='myDIV_1'>"
                                temp+=    "<div id = 'img_0'></div>"
                                temp+=    "<div id= 'img_1'></div>"
                                temp+="<div id= 'img_2'></div>"
                                temp+="</div>"
                                ramp.innerHTML+=temp
                                for(var i=0;i<photos.length;i++)
                                {
                                    let num=i
                                    var temp=document.getElementById('img_'+num.toString())
                                    // alert('img_'+num.toString(),photos[i])
                                    temp.style.border="1px solid #999ca0"
                                    var temp_img=document.createElement('img');
                                    temp_img.style.margin="3px"
                                    temp_img.src=photos[i]
                                    // temp_img.width='221'
                                    // temp_img.height='250'
                                    temp_img.style.maxHeight='260px'
                                    temp_img.style.minWidth='222px'
                                    temp_img.style.maxWidth='223px'
                                    temp.appendChild(temp_img)
                                }
                                Go_insert_here()
                            } else {
                                console.log('error ${request.status} {request.statusText}')
                            }
                        }
                    }
                    // rowes[i+1].cells[2].onclick=Go_insert_here
                })(i);
            } else {
                console.log('error ${request.status} {request.statusText}')
            }

        }
    }
    event.preventDefault();
}
const form=document.getElementById('form')
form.addEventListener('submit',submit_data)
form.addEventListener('reset',clear_all)
function clear_all(){
    var var_clear_insert_div=document.getElementById("insert")
    var_clear_insert_div.innerHTML=''
    var var_clear_insert_here_div=document.getElementById("insert_here")
    var_clear_insert_here_div.innerHTML=''
    document.getElementById('Location').disabled=0
}

function Go_insert(){
        document.getElementById('insert').scrollIntoView(true)
    }
function Go_insert_here(){
     var temp=document.getElementById('insert_here')
         temp.scrollIntoView(true)};