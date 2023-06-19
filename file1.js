public class World{

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
    }

    public void StartEngines(){}

    public void Accelerate(){}

    public void Decelerate(){}

    public void loadCargo(){}

}
