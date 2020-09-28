import ui.Menu;
public class Main {
    public static void main (String[] args){
        Doctor myDoctor = new Doctor("72397609", "Luis Mesajil", "Developer");

        Menu.show ();
        System.out.println (Menu.MESES);        
    }
}