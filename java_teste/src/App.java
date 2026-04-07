import java.util.Scanner;

public class App {
    // Variaveis escopo global:
    private final static String WELCOME_MASSAGE =   "OLÁ, informe seu nome: ";
    public static void main(String[] args) throws Exception {
        // Variaveis escopo função main:
        var scanner = new Scanner(System.in);

        System.out.print(WELCOME_MASSAGE);
        var name = scanner.next();
        //
        System.out.print("informe sua idade: ");
        var age = scanner.nextInt();
        System.out.printf("Olá %s sua idade é %s", name, age);
    }
}