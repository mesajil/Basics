import ui.Menu;
public class Main {
    public static void main (String[] args){
        Doctor myDoctor = new Doctor("72397609", "Luis Mesajil", "Developer");
        Patient myPatient = new Patient ("Roxana", "roxana@gmail.com");
        Menu.show ();
    }
}