using System;
using System.Collections.Generic;

namespace BDO
{
    class Program
    {
        static void Main(string[] args)
        {



            // 2.სორიტერბული მასივები


            //Console.WriteLine("First Array Length :");
            //int firstArrayLength = int.Parse(Console.ReadLine());
            //int[] A = new int[firstArrayLength];
            //CollectionInsert(A);
            //CollectionSort(A);
            //Console.WriteLine("--------------------------");
            //CollectionPrint(A);

            //Console.WriteLine("--------------------------");

            //Console.WriteLine("Second Array Length :");
            //int secondArrayLength = int.Parse(Console.ReadLine());
            //int[] B = new int[secondArrayLength];
            //CollectionInsert(B);
            //CollectionSort(B);

            //Console.WriteLine("--------------------------");

            //CollectionPrint(B);

            //Console.WriteLine("--------------------------");


            //var result = CollectionJoin(A, B);

            //CollectionPrint(result);












        }

        // 2.სორიტერბული მასივები
        public static int[] CollectionJoin(int[] collection1, int[]collection2)
        {
            List<int> mergedCollection = new List<int>();
            mergedCollection.AddRange(collection1);
            mergedCollection.AddRange(collection2);

            int[] collection3 = mergedCollection.ToArray();

            CollectionSort(collection3);

            return collection3;
        }

        // 2.სორიტერბული მასივები
        public static void CollectionPrint(int[] collection)
        {
            for (int i = 0; i < collection.Length; i++)
            {
                Console.WriteLine(collection[i]);
            }
        }

        // 2.სორიტერბული მასივები
        public static void CollectionInsert(int[]collection)
        {
            for (int i = 0; i < collection.Length; i++)
            {
                Console.WriteLine("Insert the element :");
                collection[i] = int.Parse(Console.ReadLine());
            }
        }

        // 2.სორიტერბული მასივები
        public static void CollectionSort(int[] collection)
        {
            for (int i = 0; i < collection.Length - 1; i++)
            {
                for (int j = i + 1; j < collection.Length; j++)
                {
                    if (collection[i] > collection[j])
                    {
                        int temp = collection[i];
                        collection[i] = collection[j];
                        collection[j] = temp;
                    }
                }
            }
        }




    }
}
