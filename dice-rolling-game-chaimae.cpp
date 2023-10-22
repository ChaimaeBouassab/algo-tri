#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;
/*RÉPONSE:
Q1. Pour simuler un lancer de dés en informatique, 
nous pouvons utiliser un générateur de nombres aléatoires
 pour obtenir un résultat aléatoire entre 1 et 6 
 (correspondant aux six faces d'un dé standard).
Q2. La fonction throwDice() pourrait ressembler à ceci :*/
int throwDice() {
  // On utilise un générateur de nombres aléatoires pour obtenir un résultat aléatoire entre 1 et 6
  int result = rand() % 6 + 1;
  return result;
}
int playerTurn() {
  std::cout << "Voulez-vous lancer 1 ou 2 dés ? ";
  int diceNum;
  std::cin >> diceNum;
  if (diceNum != 1 && diceNum != 2) {
    std::cout << "Veuillez répondre 1 ou 2." << std::endl;
    return 0;
  }
  int result = 0;
  // Lancer le nombre approprié de dés
  for (int i = 0; i < diceNum; i++) {
    result += throwDice();
  }
  // Calculer le résultat en fonction des règles du jeu
  if (diceNum == 2 && result % 2 == 0) {
    result *= -1;
  }
  return result;
}
int main() {
  int score1 = 0;
  int score2 = 0;
  // Le jeu se termine lorsque le score d'un joueur atteint 30
  while (score1 < 30 && score2 < 30) {
    // Tour du joueur 1
    std::cout << "Joueur 1 : ";
    score1 += playerTurn();
    std::cout << "Score : " << score1 << std::endl;
    // Tour du joueur 2
    std::cout << "Joueur 2 : ";
    score2 += playerTurn();
    std::cout << "Score : " << score2 << std::endl;
  }
    if (score1 >= 30) {
    std::cout << "Joueur 1 gagne !" << std::endl;
  }
  else {
    std::cout << "Joueur 2 gagne !" << std::endl;
  }
  return 0;
}