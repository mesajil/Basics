public class Doctor {
    String dni;
    String name;
    String speciality;
    public int id = 0;
    public static int ID = 0;
    public static final double PI = 3.14;


    Doctor (String dni, String name, String speciality){
        this.id = ++ this.ID;
        this.dni = dni;
        this.name = name;
        this.speciality = speciality;
    }

    public void show (){
        System.out.println (dni);
        System.out.println (name);
        System.out.println (speciality);
    }

    public static void hello (){
        System.out.println ("Hello World !");
    }
}