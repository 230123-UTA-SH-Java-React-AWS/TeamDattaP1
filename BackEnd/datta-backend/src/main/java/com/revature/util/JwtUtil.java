package com.revature.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {
    private static final long expirationTime = 1000 * 60 * 60 * 24; // 24 hours
    static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static String generateToken(int accountid, String firstname, String lastname, String dob, String bio) {
        Date now = new Date();
        Date exp = new Date(now.getTime() + expirationTime);

        String token = Jwts.builder()
                .setSubject(String.valueOf(accountid))
                .claim("firstName", firstname)
                .claim("lastName", lastname)
                .claim("dob", dob)
                .claim("bio", bio)
                .setExpiration(exp)
                .signWith( key)
                .compact();
        return token;
    }

    public static boolean validateToken(String token) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(key)
                    .parseClaimsJws(token)
                    .getBody();
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
