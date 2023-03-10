package com.revature.model;

public class Account {
    private String firstName;
    private String lastName;
    private String dob;
    private String bio;
    private int account_id;



    public Account(int account_id,String firstName, String lastName, String dob, String bio) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.bio = bio;
        this.account_id = account_id;
    }

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getDob() {
        return dob;
    }
    public void setDob(String dob) {
        this.dob = dob;
    }
    public String getBio() {
        return bio;
    }
    public void setBio(String bio) {
        this.bio = bio;
    }
    public int getAccount_id() {
        return account_id;
    }
    public void setAccount_id(int account_id) {
        this.account_id = account_id;
    }

    public Account(){
        this.firstName = "";
        this.lastName = "";
        this.dob = "";
        this.bio = "";
    }
}
