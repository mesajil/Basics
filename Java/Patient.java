

public class Patient {
    public String name;
    String email;
    String address;
    String phoneNumber;
    public String blood;

    Patient (String name, String email){
        this.name = name;
        this.email = email;
    }
    Patient (){
        this.name = "";
        this.email = "";
        this.address = "";
        this.phoneNumber = "";
        this.blood = "";
    }
}