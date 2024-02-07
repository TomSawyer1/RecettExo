const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: null,
        time: null,
        ingredients: null,
        préparations: null,
        people: null,
        recipes: []
    },
    methods: {
        checkForm: function() {
            this.errors = [];

            if (!this.name) {
                this.errors.push("Le nom de la recette est requis.");
            }
            if (!this.time || this.time < 0) {
                this.errors.push("Le temps de préparation doit être un nombre positif.");
            }
            if (!this.ingredients) {
                this.errors.push("La liste des ingrédients est requise.");
            }
            if (!this.préparations) {
                this.errors.push("Les étapes de préparation sont requises.");
            }
            if (isNaN(this.people)) {
                this.people = parseInt(this.people);
                if (!Number.isInteger(this.people)) {
                    this.errors.push('Le nombre de personnes doit être un entier.');
                }
            } else if (this.people < 1) {
                this.errors.push('Le nombre de personnes doit être supérieur à zéro.');
            }

            // ... (votre logique existante)

            // Si aucune erreur, ajoutez la recette avec un identifiant unique
            if (!this.errors.length) {
                const newRecipe = {
                    id: this.generateUniqueId(),
                    name: this.name,
                    time: this.time,
                    ingredients: this.ingredients,
                    préparations: this.préparations,
                    people: this.people
                };

                this.recipes.push(newRecipe);

                // Réinitialisez les champs du formulaire après l'ajout
                this.name = null;
                this.time = null;
                this.ingredients = null;
                this.préparations = null;
                this.people = null;
            }
        },

        generateUniqueId: function() {
            return Date.now();
        },

        deleteRecipe: function(recipeId) {
            this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
        }
    }
});
