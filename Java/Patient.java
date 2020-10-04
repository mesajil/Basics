

public class Patient {
    private String name;
    private String email;
    private String address;
    private String phoneNumber;
    private String weight;
    private double height;
    private String blood;

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

    String getName (){
        return this.name;
    }
    void setName (String name){
        this.name = name;
    }
    String getWeight (){
        return this.weight;
    }
    void setWeight (double weight, String unidades){
        this.weight = weight + " " + unidades;
    }
}