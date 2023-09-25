function MenuItem(value){
    return class extends value {
            id='abc'
    }
}
@MenuItem
class Pizza{
    id: string;
}
class Hamburger{
    id: string;
}