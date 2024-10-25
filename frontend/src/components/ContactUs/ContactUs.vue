<template>
    <v-container >
        <v-card>
        <v-row>
            <v-col>
                <v-card title="Contact Us">
                    <v-card-text>
                    <v-text-field variant="underlined" v-model="name" label="Name" 
                        required></v-text-field>

                    <v-text-field  variant="underlined" v-model="phoneNumber" label="Phone Number"></v-text-field>

                    <v-text-field  variant="underlined" v-model="email" label="Email" class="ma-2 pa-1" type="email"></v-text-field>
                    <v-textarea  variant="underlined" v-model="message" label="Message" placeholder="Enter your message"
                        class="ma-2 pa-1"></v-textarea>
                    <v-btn class="ma-1" type="submit" color="rgb(62, 105, 69)">Submit</v-btn>
                </v-card-text>
                </v-card>
            </v-col>
            <v-col>

                <v-card align-left title="Get in Touch With Us" style=" ">
                    <div> <v-card-text><v-icon left>mdi-home </v-icon> Delta tower, Ulwe 410206 </v-card-text>
                        <v-card-text><v-icon left>mdi-phone </v-icon> 11111-11111 </v-card-text>
                        <v-card-text><v-icon left>mdi-email </v-icon> Feedback and Complaints: cravee@gmail.com
                        </v-card-text>
                    </div>
                </v-card>
            </v-col>

        </v-row>
    </v-card>
    </v-container>
</template>
<script>

export default {
    data: () => ({
        name: "",
        phoneNumber: "",
        email: "",
        message: ""

    })
}
</script>
<style>

</style>
