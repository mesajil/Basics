import ui.Menu;
public class Main {
    public static void main (String[] args){
        Doctor myDoctor = new Doctor("72397609", "Luis Mesajil", "Developer");
        Patient myPatient = new Patient ("Roxana", "roxana@gmail.com");
        Patient myPatient2 = new Patient ();
        Menu.show ();

        System.out.println(myPatient.name);
        System.out.println(myPatient.blood);
        System.out.println(myPatient2.blood);

    }
}