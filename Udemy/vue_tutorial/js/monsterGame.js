/*

1.Healthbar rendering
2.buttons need methods
3.Render monster attack
4.Generate random numbers
5.Store logs in Array


*/




new Vue({

    el: '#app',
    data: { // can also pass data objects from outside the instance to as a value
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [] // store turns and log them
    },
    methods: {
        startGame: function() {

            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];

        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            console.log(this.turns);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            console.log(this.turns);
            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 12);

            this.checkWin();

        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });

            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });

            this.checkWin();
        },
        calculateDamage: function(min, max) {


            return Math.max(Math.floor(Math.random() * max), min);
        },

        checkWin: function() {

            if (this.monsterHealth <= 0) {
                if (confirm('You won new game?')) { // confirm built in JS function takes yes or no
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost new game?')) { // confirm built in JS function takes yes or no
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }

                return true;
            }
            return false;
        }

    }


});
