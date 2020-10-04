import ui.Menu;
public class Main {
    public static void main (String[] args){
        Doctor myDoctor = new Doctor("72397609", "Luis Mesajil", "Developer");
        Patient myPatient = new Patient ("Roxana", "roxana@gmail.com");
        Patient myPatient2 = new Patient ();
        // Menu.show ();
        
        myPatient.setWeight (605.5, "gramos");
        System.out.println(myPatient.getWeight());
    }
}