import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import static java.time.temporal.ChronoUnit.DAYS;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        LocalDateTime fecha = LocalDateTime.now();
        Locale spanishLocale=new Locale("es", "ES");
        String dateInSpanish=fecha.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM, yyyy",spanishLocale));
        System.out.println(dateInSpanish);

        long dias = DAYS.between(fecha.minusDays(5), fecha);
        System.out.println(dias);
    }



}