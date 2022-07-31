class People{

    constructor(name, carNum, routeNum){
        this.name = name
        this.carNum = carNum
        this.routeNum = routeNum
    }
}

class PrintTable{
    constructor (news){
        this.news = news
    }

    addTabel(){

        return `
        <div class="info info-data">
            <h3>${this.news.carNum}</h3>
            <h3>${this.news.routeNum}</h3>
        </div>`
    }
}


btn__addUser.addEventListener('click', function(){

    const newPeople = new PrintTable(
        new People(addUser__name.value, addUser__carNum.value, addUser__routeNum.value)
    );

    table_in_park.insertAdjacentHTML('afterend', `${newPeople.addTabel()}`)

    addUser__name.value = null;
    addUser__carNum.value = null;
    addUser__routeNum.value = null;
})
