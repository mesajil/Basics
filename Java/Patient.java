

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

    String GetName (){
        return this.name;
    }
    void SetName (String name){
        this.name = name;
    }
    String GetWeight (){
        return this.weight;
    }
    void SetWeight (double weight, String unidades){
        this.weight = weight + " " + unidades;
    }
}