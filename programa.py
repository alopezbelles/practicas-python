print("Hola Mundo");

num1 = 20;
num2 = 40;
suma = num1 + num2;
print ("La suma es " , num1 + num2)

if suma == 60 :
    print("El número es 60")
elif suma > 50 :
    print("El numero es alto")
else:
    print("El numero es bajo")

def sumarNumeros(num1, num2):
    if num1>num2:
        print(f"{num1} es mayor que {num2}")
    elif num1<num2:
        print(f"{num2} es mayor que {num1}")
    else:
        print("Los numeros son iguales")

sumarNumeros(2,4)
sumarNumeros(10,3)
