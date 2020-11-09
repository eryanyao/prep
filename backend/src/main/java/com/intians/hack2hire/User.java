package com.intians.hack2hire;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class User {

    private long id;
    private String name;
    private double age;
    private int grade;

    public User() {
        super();
    }

    public User(String name, double age, int grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAge() {
        return age;
    }

    public void setAge(double age) {
        this.age = age;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }
}
