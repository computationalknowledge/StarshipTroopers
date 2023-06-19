public class World{
    // todo: 
    public static void main(String [] args){
        Starship Enterprise = new Starship();
        Enterprise.RunMission();
  }

}

class Starship{

    int fuelLevel=0;
    int currentSpeed=0;
    int cargoCapacity;

    public void RunMission(){
        System.out.println("Run Mission");
        Captain.CaptainsLog("Captains Log: Stardate 4432.4. The Enterprise has been ordered to Proxima 3 to assist with Relief Efforts");

    }

    public void StartEngines(){}

    public void Accelerate(){}

    public void Decelerate(){}

    public void loadCargo(){}

}

class Captain{
    // static members can be accessed on the class directly
    // without having to make an Object Reference to the class
    public static String CaptainsLog(String logEntry){
        String LogMessage = logEntry;
        System.out.println(logEntry);
        return LogMessage;
    }

}
