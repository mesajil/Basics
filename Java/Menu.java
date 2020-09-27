import java.util.Scanner;
public class Menu {
    static void show (){
        String opcion = "";
        Scanner sc = new Scanner(System.in);
        do {
            System.out.println ("Selecciona opcion: ");
            System.out.println ("1. Movies");
            System.out.println ("2. Series");
            System.out.println ("0. Salir");

            opcion = sc.nextLine ();
            
            if (opcion.equals("1")) System.out.println ("Usted a escogido Movies");
            else if (opcion.equals("2")) System.out.println ("Usted a escogido Series");
            else if (opcion.equals("0")) System.out.println ("Gracias por su visita");
            else System.out.println ("Ingrese una opcion correcta");
        } while (!opcion.equals("0"));
    }
}