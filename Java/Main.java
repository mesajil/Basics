
public class Main {
    public static void main (String[] args){
        Doctor myDoctor = new Doctor("72397609", "Luis Mesajil", "Developer");
        myDoctor.show();

        myDoctor.hello();
        Doctor.hello();

        Doctor myDoctor2 = new Doctor("", "", "");
        myDoctor.id ++;
        System.out.println (myDoctor.id);
        System.out.println (myDoctor2.id);
    }
}